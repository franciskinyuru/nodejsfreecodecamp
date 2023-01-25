const express = require('express')
const app = express()
const path = require('path')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

//surf static files

app.use(express.static(path.join(__dirname+'/public')))

// middleware
app.use(express.json())
app.use(notFound)

// routes
app.use('/api/v1/tasks', tasks)
app.use('/api/v1/tasks/:id', tasks)

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

