const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware

app.use(express.json())

// routes

app.get('/hello', (req, res)=>{
    res.send("Task manager app")
})

app.use('/api/v1/tasks', tasks)
app.use('/api/v1/tasks/:id', tasks)




const port = 5003
app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
})