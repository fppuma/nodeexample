// Obtengo una referencia a la librer�a
var chalk = require('chalk');

// Configuro los colores
var rojo = chalk.bold.red;
var verde = chalk.bold.green;

// Uso los colores
console.log(rojo('Un error ha ocurrido'));
console.log(verde('Aqui puedo informar del resultado de una operacion'));
