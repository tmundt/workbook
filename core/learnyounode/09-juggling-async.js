var http = require('http');

//console.log(process.argv);

var responseStringURL1 = "";
var responseStringURL2 = "";
var responseStringURL3 = "";
var counterFinishedRequests = 0;

for (var i=2; i < 5;i++){
	http.get(process.argv[i], function (response) {
		response.setEncoding('utf8');
		response.on('data', function(data) {
			//console.log(data);
			switch(i) {
				case "2" : responseStringURL1 = responseStringURL1 + data;
				console.log("case 2 detected");
				break;
				case 3 : responseStringURL2 = responseStringURL2 + data;
				break;
				case 4 : responseStringURL3 = responseStringURL3 + data;
				break;
			}
		})
		response.on('end', function() {

			//console.log(responseString.length);
			//console.log(responseStringURL1);
			endedRequest(i);
		})
	});
}


var endedRequest = function(urlNumber) {	
	if (urlNumber) {
		counterFinishedRequests +=1;
	}
	console.log("endedRequest:"+ counterFinishedRequests);
	console.log(responseStringURL1);
	if(counterFinishedRequests == 3) {
		console.log(responseStringURL1);
		console.log(responseStringURL2);
		console.log(responseStringURL3);
	}
	

}