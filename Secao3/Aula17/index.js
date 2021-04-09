function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Eduardo');
console.log(variavel);

// =======================================

function soma(x,y){
    const resultado = x+y;
    return resultado
}

console.log(soma(2, 2));
console.log(soma(4, 6));
console.log(soma(1, 9));


// Criando função anonima
// aqui precisa do ponto e virgula
const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//============ arrow function ========

const raiz2 = (n) => n ** 0.5; // quando tem apenas um parametro na funcao, pode eliminar os parenteses

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));