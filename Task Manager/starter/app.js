const express = require('express')
const app = express()
const path = require('path')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

//surf static files

app.use(express.static(path.join(__dirname+'/public')))

// middleware
app.use(express.json())


// routes
app.use('/api/v1/tasks', tasks)
app.use('/api/v1/tasks/:id', tasks)
app.use(notFound)
app.use(errorHandler)

const port = 5003
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
        
    }
}
start()

