// Operadores aritmeticos
// ** dois asteriscos faz a potenciação
// % pega o resto da divisao
// outros + - / *

// EXEMPLO
const n1 = 2;
const n2 = 10;

const resultado = n1 ** n2;
console.log(resultado);

let contador = 1;
contador++; // primeiro faz a conta, depois faz o incremento - incremento, pode ser pre e pos fixado
++contador; // primeiro faz o incremento, depois faz a conta.
--contador; // decremento
contador--;

//incremento de mais de um valor

contador += 4;
contador *= 2;
contador **= 10; 

// NaN = Not a Number - tomar cuidado com 

const num1 = parseInt("5"); // converte esta string para um numero inteiro.
const num1 = parseFloat("5");
const num1 = Number("5");