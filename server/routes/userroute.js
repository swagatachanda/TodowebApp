const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const shortId = require("shortid")
const nodemailer=require("nodemailer")
router.use(express.json())
require('dotenv').config()


var transport = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port: 465,
    secure : true,
    auth: {
       user: process.env.EMAIL,
       pass: process.env.EMAIL_PASS
    }
})

router.post('/new',async(req,res)=>{
    try {
		var hashedPassword = await bcrypt.hash(req.body.password, 10)
	} catch (err) {
		return res.json({
			status: false,
			errorOccured: "password not hashed",
			error: "password",
		})
	}
	const data = {
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	}
	for (item in data) {
		if (data[item] === undefined) {
			return res.json({
				status: false,
				error: `${item} undefined`,
				errorOccured: `${item}`,
			})
		}
	}
	try {
		const searchUser = await User.findOne({ email: data.email })
		if (searchUser !== null) {
			return res.json({
				status: false,
				error: "User already exists",
				errorOccured: "user",
			})
		}
	} catch (err) {
		return res.json({
			status: false,
			error: "database unresponsive",
			errorOccured: "database",
			errorDetails: err,
		})
	}
	const newUser = new User({
		name: data.name,
		email: data.email,
		password: data.password,
	})
	try {
		const saveUser = await newUser.save()
		return res.json({ status: true, data: saveUser })
	} catch (err) {
		return res.json({
			status: false,
			error: "database unresponsive",
			errorOccured: "database",
			errorDetails: err,
		})
	}
})


router.post("/login", async (req, res) => {
	if (req.body.email === undefined || req.body.password === undefined) {
		return res.json({
			status: false,
			error: "Email/Password not found",
			errorOccured: "email/password",
		})
	}
	try {
		var findUser = await User.findOne({ email: req.body.email })
		if (findUser === null) {
			return res.json({
				status: false,
				error: "User not found",
				errorOccured: "user",
			})
		}
	} catch (err) {
		return res.json({
			status: false,
			error: "database unresponsive",
			errorOccured: "database",
			errorDetails: err,
		})
	}
	if (await bcrypt.compare(req.body.password, findUser.password)) {
		delete findUser.password
		req.session.islogged = true
		req.session.userDetails = findUser
		return res.json({ status: true, loggedSuccess: true, data: findUser, logged: req.session })
	} else {
		return res.json({
			status: false,
			error: "password not a match",
			errorOccured: "paswword",
		})
	}
})
router.get("/logout", (req, res) => {
	delete req.session.userDetails
	req.session.islogged = false
	res.json({ status: true, loggedOut: true, logged: req.session })
})

router.get('/:userid', async(req,res)=>{
	try {
		const findUser = await User.findById(req.params.userid)
		if (findUser === null) {
			return res.json({
				status: false,
				error: "No user found",
				errorMessage: "user",
			})
		}
		else{
			return res.json({
				status: true,
				data: findUser,
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
})


router.post('/forgetpassword', async(req,res)=>{
    const mail=req.body.email
    const code = shortId.generate()
    var user={}
    try{
        user=await User.findOne({email : mail})
        if(user===null)
            return res.json({status : false, error : "User not found"})
    }
    catch(err)
    {
        return res.json({status : false, error : err.message, error: err})
    }
			try{
				var hashedPass= await bcrypt.hash(code,10)
			}
			catch(err){
				res.json({status : false, error : err, message : "Passcode not found"}) 
			}
			try{
				const Updatepass= await User.updateOne({email:req.body.email}, {$set: {passcode:hashedPass}});
			}
			catch(err){
				console.log(err)
			}
    if(user!==null)
    {
        const message = {
            from: process.env.EMAIL, 
            to: user.email,         
            subject: 'Reset password',
            html : `<h2>Hello,</h2>
                    <h3>Your code to reset your password : <span style="color :red;">${code}</span></h3>` 
        }
        transport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
			  res.json({status : true , message : 'code sent'})
            }
        })
    }
    
})


router.post("/matchpass/@:emailid",async(req,res)=>{
    if(req.body.passcode==="") {return res.json({status: false, error : "Please enter passcode"})}
    const userdetails = await User.findOne({email:req.params.emailid})
	
    if (await bcrypt.compare(req.body.passcode, userdetails.passcode)) {
        delete userdetails.passcode
        res.json({status: true, data : userdetails})
    }
    else {
		return res.json({
			status: false,
			error: "passcode not a match"
		})
    }
})


router.patch('/login/forgetpassword', async (req,res)=>{
    try
    {
        try{
            var hashedPass= await bcrypt.hash(req.body.password,10)
        }
        catch(err){
            return res.json({status: false,
				errorOccured: "password not hashed",
				error: "password",}) 
        }
        // status.status=true
        try{
            const Updatepass= await User.updateOne({"_id":req.body.id}, {'$set' :{"password":hashedPass}});
            // status.data=Updatepass;
		return res.json({
			status: true,
			data: "Password updated",
		})
        }
        catch(err){
            return res.json({
				status: false,
				errorOccured: err.message,
				error: err,
			})
        }
    }
    catch(err){
        console.log(err)
    }
    
})



module.exports = router