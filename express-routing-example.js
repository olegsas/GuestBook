var express = require("express");
var path = require("path");
var logger = require("morgan");
var http = require("http");
var app = express();
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.use(logger("short"));

app.get("/", function(req, res){
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
});
app.get("/about", function(req, res){
    res.end("Welcome to the about page");
});
app.get("/weather", function(req, res){
    res.end("The current weather is NICE");
});

app.use(function(req, res){
    res.statusCode = 404;
    res.end("404!");
});

http.createServer(app).listen(3000);