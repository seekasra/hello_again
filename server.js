var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
	response.render('default', {title: 'Home', topic: 'Javascript'});
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

app.get('/who/:name?/:title?', function (request, response) {
	var name = request.params.name;
	var title = request.params.title;
	response.send(name+ ' was this and the title is : '+title);
});


app.get('*', function (request, response) {
	response.send('bad route');
});
