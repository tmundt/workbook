module.exports = function (dirPath, fileExt, callback) {
	var fs = require('fs');
	var path = require('path');

	//console.log("Module args: " + dirPath + " "+fileExt+" "+callback);
	//console.log(process.argv);
	var results = [];
	//console.log(process.argv);
	var buffer = fs.readdir(dirPath, function (error, list) {
		//function foo(error, list) {
			if (error) {
				return callback(error);
			}
			if (!error) {
				//console.log(data);
				list.forEach(function(file){
					if (path.extname(file) == "."+ fileExt) {
						//console.log("File found, name: " + file);
						results.push(file);
					}

				});
				
			}
			return callback(null, results);
		//}
	});
}