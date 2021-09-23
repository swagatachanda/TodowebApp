const mongoose = require("mongoose")
const validator = require('validator')
const user = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate:{
			validator : (value) =>{
				return validator.isEmail(value)
			},
			message : "Provide a valid email"
		}
	},
	password: {
		type: String,
		required: true,
	},
	passcode:{
		type: String
	}
})
module.exports = mongoose.model("User", user)