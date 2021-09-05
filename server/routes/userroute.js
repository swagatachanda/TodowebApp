const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
router.use(express.json())

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
		console.log({ user: findUser })
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
		console.log(req.session)
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
	console.log(req.session)
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


module.exports = router