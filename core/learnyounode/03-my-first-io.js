var fs = require('fs');

//console.log(process.argv);
var buffer = fs.readFileSync(process.argv[2]);
//console.log("buffer ist: " + buffer);
var str = buffer.toString();
var numberOfNewLines = str.split("\n");
console.log(numberOfNewLines.length - 1);