var net = require('net');

var port = process.argv[2];

//console.log(process.argv);
//console.log("Port ist: " + port);

var server = net.createServer(function(socket){
	var date = new Date();
	var month = parseInt(date.getMonth())+1;
	if (month <10) {
		month = '0' + month;
	}
	var day = parseInt(date.getDate());
	if (day < 10) {
		day = '0' + day;
	}
	var serverDate = date.getFullYear()+"-"+month+ "-"+day;
	serverDate = serverDate+' '+date.getHours()+':'+date.getMinutes()+'\n';
	socket.write(serverDate);
	socket.end();

});
server.listen(port);
