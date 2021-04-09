// Operação ternária
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

// Usuário VIP ou normal de acordo com a pontuação dele - flag 

const pontuacaoUsuario = 900;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = Verde;
const corPadrao = corUsuario || 'Preta';

console.log('Nível:', nivelUsuario,', Cor:', corPadrao);

// if(pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP');
// } else{
//     console.log('usuário Normal');
// }

// Escrevendo a mesma coisa com apenas uma linha de código
