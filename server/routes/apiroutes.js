const express = require('express')
const router = express.Router()
const userRoute = require('./userroute')
const testAPI = require('./testapi')
// const ListAPI = require('./listAPI')
router.use('/user',userRoute)
router.use('/testAPI',testAPI)
// router.use('/list',ListAPI)

router.get('/',(req,res)=>{
    res.send("Bye world")
})


module.exports = router