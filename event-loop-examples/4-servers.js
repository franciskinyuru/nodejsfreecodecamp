const http = require('http')
const server = http.createServer((req, res)=>{
    console.log('request event');
    res.end('Hi Francis')
})
server.listen(5002,()=>{
    console.log('server listening to port: 50000 ....');
})