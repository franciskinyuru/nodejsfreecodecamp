const express = require('express')
const app = express()
const path = require('path')
const people = require('./routes/people')
const auth = require('./routes/auth')

app.use('/api/people',people)
app.use('/login',auth)
//static assets
app.use(express.static(path.join(__dirname+'/methods-public')))
//parse form data
app.use(express.urlencoded({extended: false}))
//parse json 
app.use(express.json())
app.get('/',(req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/methods-public/index.html'))
})

app.listen(5001, ()=>{
    console.log("Server running on 5001");
})