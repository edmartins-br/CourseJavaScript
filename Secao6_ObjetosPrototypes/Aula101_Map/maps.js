const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];


const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas);

// se eu quiser a pessoa 2
// console.log(novasPessoas.get(2));

// iterando sobre o mapa para trazer um array
// for (const pessoa of novasPessoas)  {
//     console.log(pessoa);
// }

// Fazendo o destructuring
// muito comum fazer em python
// for (const [identifier, {id, nome}] of novasPessoas)  {
//     console.log(identifier, id, nome);
// }


// quando tem muitos dados é melhor pegar o objeto completo
// // neste caso vem somente as chaves
// for (const pessoas of novasPessoas.keys())  {
//     console.log(pessoas);
// }

// neste caso vem somente os valores
// for (const pessoas of novasPessoas.values())  {
//     console.log(pessoas);
// }

novasPessoas.delete(2);
console.log(novasPessoas);





// ESTE CODIGO NAO DEVE SER USADO POIS COLOCOU OS IDS EM ORDEM CRESCENTE E NÃO NA ORDEM DO OBJETOI
// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

// console.log(novasPessoas);

// for (const {id, nome} of pessoas) {
//     console.log(id, nome);
// }