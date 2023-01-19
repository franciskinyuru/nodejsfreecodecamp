const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://waruikinyuru:R0V3zcOgzxmZgK0S@nodeepressproject.lhdzplz.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority'
// pass = R0V3zcOgzxmZgK0S
const connectDB = (url)=>{
return mongoose
.connect(connectionString, {useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology: true} )
}

module.exports = connectDB
