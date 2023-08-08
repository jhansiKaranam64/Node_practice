const http = require('http');

/*function rqListener(req,res){

}*/
/*const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello! My name is Jhansi');
});*/

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome home');
    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to About Us page');
    } else if (req.url === '/node') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to my Node.js project');
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Page Not Found</title></head>');
        res.write('<body><h1>404 - Page Not Found</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});


