const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const sessions = require("express-session")
const MongoStore = require("connect-mongo")
const ListAPI = require('./routes/listAPI')
const path = require("path")


const api = require('./routes/apiroutes')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())


// app.get('/',(req,res)=>{
//     res.send('Hello world')
// })


app.enable("trust proxy")

const IN_PROD = process.env.NODE_ENV === "production"
const SESSION_EXPIRE = Number(process.env.SESSION_AGE) * 60 * 60 * 1000
app.use(
	sessions({
		name: process.env.SESSION_NAME,
		resave: false,
		saveUninitialized: false,
		secret: process.env.SESSION_SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DB_CONNECTION,
		}),
		cookie: {
			sameSite: true,
			maxAge: SESSION_EXPIRE,
			secure: IN_PROD,
			httpOnly: false,
		},
	})
)

app.use('/api',api)
app.use('/note',ListAPI)


if(process.env.NODE_ENV==='production'){
	app.use(express.static(path.join(__dirname,"../client/build")))
		// res.sendFile(path.join(__dirname,'../client/build', 'index.html'))
		app.get("/*",(req,res)=>{
			res.sendFile('index.html', {root: path.join(__dirname, '../client/build')})
		})
}





mongoose.connect(process.env.DB_CONNECTION, 
	err=>{
        if(err) throw err;
        console.log('Connected to MongoDB')
    }
)


app.listen(process.env.PORT||5000)