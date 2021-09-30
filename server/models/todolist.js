const mongoose = require("mongoose")
require("mongoose-type-url")
const todolist = mongoose.Schema({
	userId:{
        type: mongoose.Types.ObjectId,
        required: true
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
    },
    photoUrl:{
        type: [mongoose.SchemaTypes.Url]
    },
    isLiked:{
        type: Boolean,
        required: true,
        default: false
    }
})
module.exports = mongoose.model("todolist", todolist)