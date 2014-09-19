var http = require('http');

//console.log(process.argv);
var responseString = "";

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	response.on('data', function(data) {
		//console.log(data);
		responseString = responseString + data;
	})
	response.on('end', function() {

		console.log(responseString.length);
		console.log(responseString);

	})
});