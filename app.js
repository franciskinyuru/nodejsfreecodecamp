const { write } = require('fs');
const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end('Welcome to our Home page')
    }
    if(req.url == "/about"){
        res.end("Here is our short history")
    }

    res.end(`<h1>Oops!</h1> <p>we can't fin the page you are looking for</p> <a href="/">Back home</a>`)
    

})
const PORT = process.env.PORT || 5002;
server.listen(PORT)
//1:45:58 - let do it mu buddy
