const express = require('express')
const app = express()
const path = require('path')
let {people} = require('./data')

//static assets
app.use(express.static(path.join(__dirname+'/methods-public')))

//parse form data
app.use(express.urlencoded({extended: false}))
//parse json 
app.use(express.json())
app.get('/',(req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/methods-public/index.html'))
})

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true,data:people})
})
app.post('/api/people',(req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg: 'Please provide name value'})
    }
    res.status(201).json({success:true, person: name})
})
app.post('/login', (req, res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send(`please provide credentials`)
})
app.listen(5001, ()=>{
    console.log("Server running on 5001");
})