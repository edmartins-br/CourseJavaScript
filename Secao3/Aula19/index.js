// ==== VALORES PRIMITIVOS E VALORES POR REFERENCIA ====

/*
Primitivos (imoutaveis) - String, number, boolean, undefined,
null (bigint, symbol) - valores copiados

Referência (mutável) - Array, object, function - passados por referência
*/


let nome = 'Luiz';
nome = 'Otavio'; // apenas foi trocado o conteudo, nao foi alterado o conteudo
console.log(nome);