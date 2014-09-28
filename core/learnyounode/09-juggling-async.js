var http = require('http');

//console.log(process.argv);

// save three URLs to the server
var serverURLList = [];
for (var i = 2; i<process.argv.length;i++) {
	//console.log('URL Nr. '+i+': '+ process.argv[i]);
	serverURLList.push(process.argv[i]);
}

var responseStringURL1 = "";
var responseStringURL2 = "";
var responseStringURL3 = "";
var counterFinishedRequests = 0;


var getDataFromURL = function(url) {
	http.get(serverURLList[url], function(response) {
		response.on('data', function(data){
			// console.log('getDataFromURL, getting data');
			switch(url) {
				case 0:
				responseStringURL1 += data;
				break;
				case 1:
				//console.log('url ist: ' + url);
				responseStringURL2 += data;
				break;
				case 2:
				responseStringURL3 += data;
				//console.log('url ist: ' + url);
				break;
			}
				
		})
		response.on('end', function(){
			//console.log("response at an end for url 2");
			counterFinishedRequests +=1;
			//console.log(counterFinishedRequests);
			if(counterFinishedRequests < 3) {
				getDataFromURL(counterFinishedRequests);
			} else if (counterFinishedRequests <= 3) {
				console.log(responseStringURL1);
				console.log(responseStringURL2);
				console.log(responseStringURL3);
			};
			
		});
	});
}
getDataFromURL(counterFinishedRequests);