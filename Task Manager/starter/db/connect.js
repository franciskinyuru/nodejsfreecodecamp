const mongoose = require('mongoose')
//const connectionString =''
// pass = R0V3zcOgzxmZgK0S
const connectDB = (url)=>{
return mongoose
.connect(url, {useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology: true} )
}

module.exports = connectDB
