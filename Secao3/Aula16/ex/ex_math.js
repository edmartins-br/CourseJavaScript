const { isInteger } = require("mathjs");

let numero = prompt('Digite um número:');

console.log(`A Raiz quadrada de ${numero} é: <strong>${Math.sqrt(numero)}</strong><br />`);
console.log(`É um número inteiro?: ${isInteger(numero)}`);
console.log(`É NaN?: ${isNaN(numero)}`);
console.log(`Arredondando para baixo: ${(Math.floor(numero))}`);
console.log(Math.ceil(numero));
console.log(numero.toFixed(2));