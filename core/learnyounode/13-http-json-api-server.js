var http = require('http');
var url = require('url');
//var map = require('/usr/local/lib/node_modules/learnyounode/node_modules/through2-map');

var port = process.argv[2];

//console.log(process.argv);

var server = http.createServer(function(request, response) {
	if(request.method != 'GET') {
		return response.end('Please give a GET-Method!');
	}
	response.writeHead(200, { 'Content-Type': 'application/json' });
	var clientData = url.parse(request.url, true);
	//console.log('clientData path ist: '+clientData.path);
	var requestPathArray = clientData.path.split('?');
	var requestPath = requestPathArray[0];
	var requestData = requestPathArray[1].split('=');
	var requestDateString = requestData[1];
	//console.log('requestPath ist: '+requestPath);
	//console.log('requestDate (string) ist: '+requestDateString);
	var requestDate = new Date(requestDateString);
	//console.log('requestDate ist (date-format):'+requestDate);

	if(requestPath =='/api/parsetime') {
		var responseObject = {
			'hour' : requestDate.getHours(),
			'minute' : requestDate.getMinutes(),
			'second' : requestDate.getSeconds()
		} 
	} else if(requestPath == '/api/unixtime') {
		var responseObject = {
			'unixtime' : requestDate.getTime()
		}

	} else {
		response.writeHead(404);
		return response.end('Unknown data-format!');
	}
	

	
	var responseJSON = JSON.stringify(responseObject);
	//console.log('responseJSON ist: '+responseJSON);
	response.write(responseJSON);
	//response.end('nice to have you');
	response.end();
});
server.listen(port);
