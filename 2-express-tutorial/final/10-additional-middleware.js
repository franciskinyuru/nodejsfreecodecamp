const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res
// use vs route
// options - our own / express / third party

//app.use([logger, authorize])
// third party
//app.use('/public', express.static('/public'))
app.use(morgan('tiny'))
app.get('/',(req, res)=>{
       res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req, res)=>{
    res.send('Products')
})
app.get('/api/items',[logger, authorize],(req, res)=>{
    console.log(req.user);
    res.send('Items')
})
app.listen(5001, ()=>{
    console.log("Server running on 5001");
})