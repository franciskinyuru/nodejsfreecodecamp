require('dotenv').config()
require('express-async-errors')

//async errors

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const procuctsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


app.use(express.json())

// routes
app.get('/', (req, res) =>{
    res.send(`<h1>Store api</h1>  <a href="/api/v1/products">products route</a> `)
})

//product routes
app.use('/api/v1/products', procuctsRouter)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
        console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()