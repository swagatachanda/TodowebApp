const express = require('express')
const router = express.Router()
const User = require('../models/user')
const List = require('../models/todolist')
const aws = require('aws-sdk')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
router.use(express.json())

require('dotenv').config()


const storage = multer.memoryStorage({
    destination: function(req,file,callback){
        callback(null,"")
    }
})

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})

const upload = multer({storage}).single("image") //'image' parameter should be same as the the postman parameter name ->  body->form-data


router.post("/upload/:listid", upload, (req,res)=>{
    const filename = req.file.originalname.split(".")
    const filetype = filename[filename.length-1]
    console.log(req.file)
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uuidv4()}.${filetype}`,
        Body: req.file.buffer,
        ACL: "public-read"
    }
    s3.upload(params, async(error,data)=>{
        if(error){
            res.status(505).send(error)
        }
        try {
            const searchList = await List.findById(req.params.listid)
            console.log(searchList)
            if (searchList === null) {
                return res.status(404).json({
                    error: 'List not found',
                    errorOccured: 'list',
                })
            }
            searchList.photoUrl.push(data.Location)
            const updateList = await List.updateOne(
                { _id: req.params.listid },
                { $set: searchList }
            )
            console.log(updateList)
            res.status(200).send(data)
        } catch (err) {
            return res.status(500).json({
                error: 'database unresponsive1',
                errorMessage: err,
                errorOccured: 'database',
            })
        }
    })
})


router.delete(`/deletephoto/:name`, async(req,res)=>{
    var q={}
    var names=[]
    names.push(new RegExp(req.params.name))
    q.photoUrl = {'$in': names}
    const searchList = await List.findOne(q)
    if (searchList === null) {
        return res.status(404).json({
            error: 'List not found',
            errorOccured: 'list',
        })
    }
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${req.params.name}`,
    }
    s3.deleteObject(params, async(error, data)=>{
    if(error){
        res.status(505).send(error)
    }
    try{
        var index
        searchList.photoUrl.map((item)=>{
        if(item.split('/').slice(-1)[0]==req.params.name){
            index = searchList.photoUrl.indexOf(item)
        }
    })
        if (index > -1) {
            searchList.photoUrl.splice(index, 1)
        }
        const updateList = await List.updateOne(
            { _id: searchList._id },
            { $set: {photoUrl: searchList.photoUrl} }
        )
        
        res.status(200).send("Data deleted")
    }
    catch(err){
        return res.status(500).json({
            error: 'database unresponsive1',
            errorMessage: err,
            errorOccured: 'database',
        })
    }
    })
})


router.post("/new", async (req, res) => {
	const data = {}
	const validFields = ["userId", "todoname", "content", "dot", "edit"]
	for (item in req.body) {
        // console.log(item)
		if (validFields.includes(item)) {
			data[item] = req.body[item]
		}
	}
    data[validFields[3]] = new Date()
	console.log(data)
	var newlist = new List()
    for (item in data){
        newlist[item] = data[item]
    }
    try {
		const saveList = await newlist.save()
		res.json({ status: true, data: saveList })
	} catch (err) {
		const errorOccured = []
		for (item in err.errors) {
			errorOccured.push(item)
		}
		res.json({
			status: false,
			erorr: err.message,
			errorOccured: errorOccured,
			errorDetails: err,
			code: 100,
		})
	}
})


router.patch('/update/:listid',async(req,res)=>{
    const data = {}
    const validFields = [
        'todoname',
        'content',
        'dot',
        'edit'
    ]
    for (item in req.body) {
        if (req.body[item] !== undefined && validFields.includes(item)) {
            data[`${item}`] = req.body[`${item}`]
        }
    }
    data[validFields[2]] = new Date()
    try {
        const searchList = await List.findById(req.params.listid)
        if (searchList === null) {
            return res.status(404).json({
                error: 'List not found',
                errorOccured: 'list',
            })
        }
    } catch (err) {
        return res.status(500).json({
            error: 'database unresponsive1',
            errorMessage: err,
            errorOccured: 'database',
        })
    }
    try {
        const updateList = await List.updateOne(
            { _id: req.params.listid },
            { $set: data }
        )
        if (updateList.nModified <= 0) {
            return res.status(404).json({
                error: 'member could not be updated',
                errorOccured: 'error',
            })
        }
        res.status(201).json({
            isUpdated: true,
        })
    } catch (err) {
        return res.status(500).json({
            error: 'database unresponsive2',
            errorMessage: err,
            errorOccured: 'database',
        })
    }
})

router.get("/all/:userid", async (req, res) => {
	try {
		const findUser = await User.findById(req.params.userid)
		if (findUser === null) {
			return res.json({
				status: false,
				error: "No user found",
				errorMessage: "user",
			})
		}
	} catch (err) {
		return res.json({
			status: false,
			erorr: err.message,
			errorOccured: errorOccured,
			errorDetails: err,
		})
	}
	try {
		const getLists = await List.find({ userId: req.params.userid }).sort({'dot':-1})
        var q=[]
        if(req.query.month){
            getLists.map((item)=>{
                console.log(item.dot)
                if(new RegExp(item.dot.toString().split(" ")[1]).test(req.query.month)){
                    q.push(item)
                    
                }
            })
            return res.json({
                status: true,
                data: q
            })
        }
        if(req.query.year){
            getLists.map((item)=>{
                if(new RegExp(req.query.year).test(item.dot.toString().split(" ")[3])){
                    q.push(item)
                    
                }
            })
            return res.json({
                status: true,
                data: q
            })
        }
        
        if(req.query.content){
            getLists.map((item)=>{
                req.query.content.toLocaleLowerCase().split(" ").map((item_search)=>{
                    if(new RegExp(item_search).test(item.content)){
                        q.push(item)
                    }
                })
            })
            return res.json({
                status: true,
                data: q
            })
        }
		return res.json({
			status: true,
			data: getLists,
		})
	} catch (err) {
		return res.json({
			status: false,
			erorr: err.message,
			// errorOccured: errorOccured,
			errorDetails: err,
		})
	}
})



router.get('/getlist/:listid', async(req,res)=>{
    try {
        var getList = await List.findById(req.params.listid)
        if (getList === null) {
            return res.status(404).json({
                error: 'list not found',
                errorOccured: 'no list',
            })
        }
    } catch (err) {
        return res.status(500).json({
            error: 'database unresponsive',
            errorOccured: 'database',
            errorMessage: err,
        })
    }
    try{
        const searchList = await List.findOne({
            _id: req.params.listid,
        })
        return res.status(200).json({
            data: searchList
        })
    } catch (err) {
        return res.status(501).json({
        error: 'database not working',
        errorOccured: 'database',
        errorMessage: err,
    })
}
})


router.delete("/delete/:listid", async(req,res)=>{
    try {
        var getList = await List.findById(req.params.listid)
        if (getList === null) {
            return res.status(404).json({
                error: 'list not found',
                errorOccured: 'no member',
            })
        }
    } catch (err) {
        return res.status(500).json({
            error: 'database unresponsive',
            errorOccured: 'database',
            errorMessage: err,
        })
    }
    try{
        const deleteList = await List.deleteOne({
            _id: req.params.listid,
        })
        return res.status(200).json({
            data: 'deleted'
        })
    } catch (err) {
        return res.status(501).json({
        error: 'database not working',
        errorOccured: 'database',
        errorMessage: err,
    })
}
})



module.exports = router