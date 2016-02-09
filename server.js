var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
	response.render('default', {
		title: 'Home', 
		classname: 'home',
		users: ['hamed', 'reza', 'hosein']
	});
});
app.get('/about', function (request, response) {
	response.render('default', {
		title: 'about us', 
		classname: 'about'
	});
});

app.get('*', function (request, response) {
	response.send('bad route');
});

var server = app.listen(3000, function (){
	console.log('Listening on port 3000');
});

