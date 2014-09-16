var mymodule = require('./06-mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, data){
	//console.log(data);
	for ( result in data) {
		console.log(data[result]);
	}	
});

