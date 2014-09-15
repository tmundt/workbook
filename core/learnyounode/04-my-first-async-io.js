var fs = require('fs');

//console.log(process.argv);
var buffer = fs.readFile(process.argv[2], 'utf-8', function(error, data) {
	if (!error) {
		//console.log(data);
		var numberOfNewLines = data.split("\n");
		console.log(numberOfNewLines.length - 1);
	}
});
//console.log("buffer ist: " + buffer);