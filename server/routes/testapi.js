var express = require('express')
var router = express.Router()

router.get("/",(req,res)=>{
    res.send("API is working perfectly")
})


module.exports=router