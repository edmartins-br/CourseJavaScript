/*
Object.values
Object.entrie
Object.assign(des, any)
Object.getOwnProperyDescriptor(o, 'prop')
... (spread)

// Ja vimos
Object.kewys (retorna as chaves)
Object.freeze (congela o objeto, nao deixa alterar masi nada em metodos posteriores)
Object.defineProperties (define várias propriedades)
Object.define Property (define uma propriedade)

*/

// const produto = {nome: 'Produto', preco: 1.8};
// //const outraCoisa = produto;
// const caneca = { 
//     ...produto,
//     material: 'porcelana'
//  }; // espalhando o objeto original

// caneca.nome = 'Camiseta Verde';
// caneca.preco = 2.5;

// console.log(outraCoisa);
// console.log(produto);

// =====================ASSIGN============================

// const produto = {nome: 'Produto', preco: 1.8};
// //const outraCoisa = produto;
// const caneca = Object.assign({}, produto, {material: 'porcelana'});

// caneca.nome = 'Camiseta Verde';
// caneca.preco = 2.5;

// console.log(produto);
// console.log(caneca);

// ================= Get Own Property Descriptor ================================

// const produto = {nome: 'Produto', preco: 1.8};
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// });

// Resultado

// {
//     value: 'Produto',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

// ================= VALUES & ENTRIES ===================

const produto = {nome: 'Produto', preco: 1.8, material: 'procelana'};
//console.log(Object.values(produto, 'nome'));

// for (let entry of Object.entries(produto)) {
//     console.log(entry);
// }

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}