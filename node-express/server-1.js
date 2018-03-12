var express = require('express');
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(function(req,res,next){
    console.log(req.headers);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<p>Hello World</p>');
});

var server = http.createServer(app);

server.listen(port,hostname,function(){
    console.log('Server is running at http://'+hostname+':'+port);
});