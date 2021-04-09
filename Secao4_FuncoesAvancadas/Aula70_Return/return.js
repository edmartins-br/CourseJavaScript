// return
// Retorna um valor
// Termina a função

// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(5 , 2));

// function soma2(a, b)    {
//     console.log(a + b);
// }
// soma2(5 , 2);

// ===================================================

// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Oliveira'
// };

// console.log(typeof p1);
// console.log(typeof p2);

// ===================================================

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('mundo'));



// ===================================================

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    //  multiplicador esta neste escopo
    // function multiplicacao(n) {
    return function(n){
        return n * multiplicador;
    };        
}
    
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));

