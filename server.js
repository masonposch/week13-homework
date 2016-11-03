var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');




var app = express();
var PORT = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));





//--------------------------------------------------------------------------------------------


var friends = [
	
	{
	  "name":"Ahmed",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	     5,
	     1,
	     4,
	     4,
	     5,
	     1,
	     2,
	     5,
	     4,
	     1
	   ]
	},
	{
	  "name":"Mason",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	     5,
	     1,
	     4,
	     4,
	     5,
	     1,
	     2,
	     5,
	     4,
	     1
	   ]
	}

];


//--------------------------------------------------------------------------------------------

//GET ROUTING

app.get("/", function(req, res){

	res.sendFile(path.join(__dirname, "home.html"));

});


app.get("/survey", function(req, res){

	res.sendFile(path.join(__dirname, "survey.html"));

});



app.get('/friends', function(req, res){

	var friend = req.params.friends;
	console.log(res);

	if(friend){
		for(var i=0; i < friends.length; i++){
			if(friend === friends[i].name){
				res.json(friends[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(friends);
	}

});



// require("./app/routing/html-routes.js");
// require("./app/routing/api-routes.js");


//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------

//POST ROUTING

app.post('/survey', function(req, res){
	var user = {
		"name": req.body.name,
		"photo": req.body.image.Link,
		"score": [
			req.body.question1.value,
			req.body.question2.value,
			req.body.question3.value,
			req.body.question4.value,
			req.body.question5.value,
			req.body.question6.value,
			req.body.question7.value,
			req.body.question8.value,
			req.body.question9.value,
			req.body.question10.value,
		]
	}
	console.log("User: " + user);
  	res.end("yes");


});


//--------------------------------------------------------------------------------------------



//Call server
app.listen(PORT, function(){

	console.log('App listening on PORT ' + PORT);

});













