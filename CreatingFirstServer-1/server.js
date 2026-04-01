const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Server Started")
})

server.listen(3000,()=>{
    console.log('server is listening now')
})