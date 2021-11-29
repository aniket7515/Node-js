// Creating a HTTP server

const http = require("http");

const server = http.createServer((req,res)=>{
    res.end('Hello from the other sides');
})


server.listen(3000,"127.0.0.1",()=>{
    console.log('listening to the port 3000');
});