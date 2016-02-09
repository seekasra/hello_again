var express = require('express');
var app = express();

app.get('/', function (request, response) {
	response.send('<h1>hello</h1> express');
});


app.get('/me', function (request, response) {
	response.send('@seekasra');
});

var server = app.listen(3000, function (){
	console.log('Listening on port 3000');
});


app.get('/who/:name?', function (request, response) {
	var name = request.params.name;
	response.send(name +' was here');
});

