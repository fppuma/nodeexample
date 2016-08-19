var fs = require("fs");
var resultado = fs.readFileSync("test.js");
console.log(resultado.toString());