//console.log(process.argv);

//var firstNumber = parseInt(process.argv[2]);
var length = process.argv.length;
var sum = 0;
//console.log(firstNumber + "length: " + length);

for (var i = 2; i < length; i++) {
	//console.log("Number to be added: " + process.argv[i]);
	sum = sum + parseInt( process.argv[i]);
}
console.log(sum);
