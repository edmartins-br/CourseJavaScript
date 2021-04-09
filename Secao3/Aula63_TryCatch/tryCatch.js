// try {
//     console.log(naoExisto);
// } catch(erro) {
//     console.log('Variavel nao existe!');
// }

function soma(x, y)  {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw('X e Y precisam ser números!'); // lança o erro personalizado
    // throw new Error('X e Y precisam ser números!'); // lança o erro do JS com todo o caminho
  }
  return x + y;
}

try {
  console.log(soma('a', 20));
} catch(err) {
  console.log(err);
}

