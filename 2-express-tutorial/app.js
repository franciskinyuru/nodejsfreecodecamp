const express = require('express')
const path = require('path')
const app = express()
// setup static and middleware
app.use('/public',express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.get('*', (req, res)=>{
    res.status(404).send('Resource not found')
})

app.listen(5001, ()=>{
    console.log('server is listening in port 5001');
})
 
