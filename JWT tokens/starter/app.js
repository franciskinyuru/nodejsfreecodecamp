require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const mainRouter= require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandleMiddleware = require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1', mainRouter)
app.use(errorHandleMiddleware)
app.use(notFoundMiddleware)



const PORT = process.env.PORT || 9090


const start = async () =>{
    try {
        app.listen(PORT, console.log(`Server is listening on port ${PORT} ...`))
    } catch (error) {
        console.log(error);
    }
}

start()