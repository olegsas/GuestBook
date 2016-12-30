var express = require("express");
var http = require("http");

var app = express();

app.use(function(req, res, next){
    console.log("In comes a" + req.method + "to" + req.url);
    next();
});// logging middleware

app.use(function(req, res, next){
    var minute = (new Date()).getMinutes();
    if((minute % 2) === 0 ){
        next();
    }else{
        res.statusCode = 403;
        res.end("Not authorised");
    }
});

app.use(function(req, res){
    res.end('Secret info: the password is "swordfish"');
});

http.createServer(app).listen(3000);

