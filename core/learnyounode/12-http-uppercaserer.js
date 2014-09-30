var http = require('http');
var fs = require('fs');
var map = require('/usr/local/lib/node_modules/learnyounode/node_modules/through2-map');

var port = process.argv[2];

//console.log(process.argv);

var server = http.createServer(function(request, response) {
	//console.log(request.length);
	if(request.method != 'POST') {
		return response.end('Please give a POST-Method!');
	}
	request.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase().split('').join('');

	})).pipe(response);
});
server.listen(port);