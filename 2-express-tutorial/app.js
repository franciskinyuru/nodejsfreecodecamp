const express = require('express')
const app = express()
const path = require('path')
const people = require('./routes/people')
const auth = require('./routes/auth')
const home = require('./routes/home')
//static assets
app.use(express.static(path.join(__dirname+'/methods-public')))
//parse form data
app.use(express.urlencoded({extended: false}))
//parse json 
app.use(express.json())
app.use('/', home)
app.use('/api/people',people)
app.use('/login',auth)

app.listen(5001, ()=>{
    console.log("Server running on 5001");
})