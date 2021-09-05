const mongoose = require("mongoose")
require("mongoose-type-url")
const todolist = mongoose.Schema({
	userId:{
        type: mongoose.Types.ObjectId,
    },
    // todoname: {
	// 	type: String,
    // },
    content:{
        type: String
    },
    dot:{
        type: Date,
        required: true
    },
    edit:{
        type: String
    }
})
module.exports = mongoose.model("todolist", todolist)