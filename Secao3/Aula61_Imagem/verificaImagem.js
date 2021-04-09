// function modoImagem(largura, altura) {
//     //return modo = largura > altura ? 'PAISAGEM' : 'RETRATO';
//     //return largura > altura;

// }

// Refazendo com arrow function
const modoImagem = (largura, altura) => largura > altura ? 'PAISAGEM' : 'RETRATO';

console.log(modoImagem(1920, 1080));