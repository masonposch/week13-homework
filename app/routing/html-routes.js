// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');


// var app = express();


app.get("/", function(res, req){

	res.sendFile(path.join(__dirname + "/../public/home.html"));

});


app.get("/survey", function(res, req){

	res.sendFile(path.join(__dirname + "/../public/survey.html"));

});



// app.use('*', function(req, res){
// 	res.redirect("/");
// });