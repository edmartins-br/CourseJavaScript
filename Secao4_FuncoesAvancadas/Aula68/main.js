// Declaração de função

// Declaração literal (function hoisting)
function falaOi(){
    console.log('Oi.');
}
// Hoisting = engine do javascript vai elevar essas declarações para o topo do javascript
// posso chamar a função antes ou depois de cria-la.

// Funções sao (first-class-objects) - pode ser tratada em javascript ou em outras linguagens de programação com python por exemplo.
// podem ser tratadas como dado

//function expression
const nome = 'Eduardo';
const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();
// posso jogar essa variavel como parametro de outra funcao

function executaFuncao(funcao) {
    console.log('Executa a funcao abaixo!');
    funcao();
}
executaFuncao(souUmDado);

// Arrow functions
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();