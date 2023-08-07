const http = require('http');

/*function rqListener(req,res){

}*/
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello! My name is Jhansi');
});

server.listen(4000,()=>{
    console.log('Server is running on port 4000')
});