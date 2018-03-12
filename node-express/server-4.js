var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// const express = require('express')
// const app = express()
// app.set('port', process.env.PORT || 3000)
// app.set('views', 'templates') // The directory the templates are stored in
// app.set('view engine', 'jade')

var hostname = '192.168.1.75';
var port = 3000;

var app = express();

app.use(morgan('dev'));

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all(function(req, res,next){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    //next();
})
.get(function(req,res,next){
    res.end('Will send all the dishes to you!');
})
.post(function(req,res,next){
    res.end('Will add to the dish: ' + req.body.name+ ' with details: ' + req.body.description);
})
.delete(function(req,res,next){
    res.end('Deleting all dishes');
});

dishRouter.route('/dishId')
.all(function(req, res,next){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
})
.get(function(req,res,next){
    res.end('Will send all the dishes of the dish: ' + req.params.dishId + ' to you');
})
.post(function(req,res,next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req,res,next){
    res.end('Deleting dish: ' + req.params.dishId);
});


app.use('/dishes', dishRouter);


app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
    console.log('Server running at http://'+hostname+':' + port);
});
