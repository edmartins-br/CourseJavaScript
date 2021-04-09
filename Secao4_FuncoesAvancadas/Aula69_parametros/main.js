console.log('FUNÇÃO 01:');
function funcao1() {
    console.log(arguments[5]);
}
funcao1('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// =======================================================
// argumentos que sustentam todos os argumentos enviados

console.log('FUNÇÃO 02:');
function funcao2() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
funcao2();

// =======================================================
// ARGUMENTS não funciona em arrow functions

console.log('FUNÇÃO 03:');
function funcao3(a,b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// =======================================================

// não da problema mas da UNDEFINED

console.log('FUNÇÃO 04:');
function funcao4(a, b, c, d, e, f)  {
    console.log(a, b, c, d, e, f);
}
funcao4(1, 2, 3);

// =======================================================
// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

console.log('FUNÇÃO 05:');
function funcao5({ nome, sobrenome, idade })    {
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 30}
funcao5(obj)

// =======================================================
// DESESTRUTURAÇÃO DE ARRAY

console.log('FUNÇÃO 06:');
function funcao6([valor1, valor2, valor3 ])    {
    console.log(valor1, valor2, valor3 );
}
funcao6(['Eduardo', 'Machado', 30])

// =======================================================
// DESESTRUTURAÇÃO DE ARRAY

console.log('FUNÇÃO CONTA:');
function conta(operador, acumulador, ...numeros)   { // ... (tres pontinhos) rest operator, TEM SEMPRE QUE SER O ULTIMO PARAMETRO
    for (let numero of numeros) { // let in retorna os indices do array, of retorna os valores do array
        // console.log(numero);
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('*', 1, 20, 30, 40, 50);

// =======================================================
// FUNCTION EXPRESSION

console.log('FUNÇÃO CONTA1:');
const conta1 = function(operador, acumulador, ...numeros)   { 
    console.log(arguments); // arguments nao funciona com arrow function
}; // function expression precisa desse ponto e virgula aqui
    
conta1('+', 1, 20, 30, 40, 50);

// =======================================================
// ARROW FUNCTION
console.log('FUNÇÃO CONTA2:');
const conta2 = (...args) =>  { // rest operator assim funciona em qualquer tipo de função
    console.log(args);
}; // function expression precisa desse ponto e virgula aqui
    
conta2('+', 1, 20, 30, 40, 50);