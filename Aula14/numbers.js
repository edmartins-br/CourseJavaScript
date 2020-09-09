let n1 = 1500;
let n2 = 4.565151;
let n3 = 10;
console.log(n1.toString() + n2);
console.log(typeof n1);
console.log(n1.toString(2)); // o numero "2" é a opção para se mostrar o valor daquela variavel em binario
console.log(n2.toFixed(2)); // arredondamento pra quantidade de casas decimais desejada
console.log(Number.isInteger(n2)); // verificar se o valor é inteiro
console.log(Number.isInteger(n1));

// padrao IEEE 754-2008 tem um problema de imprecisao nas operacoes aritimeticas

let n4 = 0.7;
let n5 = 0.1;

let n6 = n4 + n5; // o valor fica quebrado. era para o resultado ser 1, mas resulta em 0,799999999

// corrigindo este problems
n6 = parseFloat(n6.toFixed(2)); // da pra usar o Number tbm pra resolver o problemaa - n6 = Number(n6.toFixed(2));
console.log(n6);