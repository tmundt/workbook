var fs = require('fs');
var path = require('path');

//console.log(process.argv);
var results = [];
//console.log(process.argv);
var buffer = fs.readdir(process.argv[2], function(error, list) {
	if (!error) {
		//console.log(data);
		list.forEach(function(file){
			if (path.extname(file) == "."+process.argv[3]) {
				//console.log("File found, name: " + file);
				results.push(file);
			}

		});
		for ( result in results) {
			console.log(results[result]);
		}
		
	}

});