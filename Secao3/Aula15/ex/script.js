// Converte a string digitada para um NUMBER
const numero = Number(prompt('Digite seu número:'));

// seleciona a DIV com o titulo (numero-titulo)
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const raiz = document.getElementById('raiz')
const inteiro = document.getElementById('inteiro')
const nan = document.getElementById('nan')
const floor = document.getElementById('floor')
const ceil = document.getElementById('ceil')
const decimal = document.getElementById('decimal')


// no mundo real mesmo se seleciona utilizando as tags do CSS

//alterar o HTML interno destes elementos selecionados.
numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é: ${numero + 2}</p>`;
raiz.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
inteiro.innerHTML = `<p>É Inteiro? : ${Number.isInteger(numero)}</p>`;
nan.innerHTML = `<p>É um NaN? ${Number.isNaN(numero)}</p>`;
floor.innerHTML = `<p>Arrodandndo para baixo: ${Math.floor(numero)}</p>`;
ceil.innerHTML = `<p>Arrdondando para cima: ${Math.ceil(numero)}</p>`;
decimal.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;


