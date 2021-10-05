const http = require('http');
const fs = require ('fs');

let readableStream = fs.createReadStream('./data/info2.txt','utf-8');

http.createServer(function(req,res){
    if ((req.url="/")){
        res.writeHead(200,{"Content-Type": "text/plain"});
        readableStream.pipe(res);
    }
}).listen(3000, "localhost")

console.log("server created");
