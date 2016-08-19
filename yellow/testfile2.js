var fs = require("fs");
fs.readFile("tes0t.js", function(err,data){
	if(err) throw err;
	console.log("imprimiendo resultado");
	console.log(data.toString());
}
);