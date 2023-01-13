const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end("Homepage")
    }
    else if(req.url == '/about'){
        // blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                 console.log(`${j} and ${i}`);
            }
        }
        res.end('About page')
    }else{
        res.end('Oops! error')
    }
})
server.listen(5002,()=>{
    console.log('server listening on port: 50000 ....');
})