const http = require('http');
server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("hello world");
	response.end();
});
server.listen(3000);
