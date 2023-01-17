const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res

app.use([logger, authorize])

app.get('/', logger,(req, res)=>{
    
    res.send('Home')
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req, res)=>{
    res.send('Products')
})
app.get('/api/items',(req, res)=>{
    console.log(req.user);
    res.send('Items')
})
app.listen(5001, ()=>{
    console.log("Server running on 5001");
})