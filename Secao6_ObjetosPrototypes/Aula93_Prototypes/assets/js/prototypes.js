/*
    O JavaScript é baseado em protoripos para passar propriedades e metodos de um objeto para outro.

    Definição deprototipo:
    Prototipo é o termo usado para se referur a que foi cruado pela primeira vezx,
    servido de modelo ou de molde para futuras produções.

    Todos os objetos tem uam referencia interna para um prototipo
    (__proto__) que vem da propriedade prototype da funçao construtora
    que foi usada poara cria-la. Quando tentamso acessar o membro de um objeto, primeiro o motor
    do JS vai tentar encontrar este membro de prorio objeto e depois a cadeia de prototipos
    é usada ate o tipo (null) ate encontrar (ou nao) tal membro.

*/

// Função construtora - Molde que cria novos objetos

// function Pessoa(nome, sobrenome)    {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }


// // instancia
// const pessoa1 = new Pessoa('Eduardo', 'Martins');
// const pessoa2 = new Pessoa('Luiz', 'Otávio');

// console.dir(pessoa1);
// console.dir(pessoa2);

// no codigo acima tem um problema de performance, os 2 objetos pessoas criam cada um um metodo
// isso desperdiça recursos do computador do cliente.


// usando prototypes


function Pessoa(nome, sobrenome)    {
    this.nome = nome;
    this.sobrenome = sobrenome; //this joga o item dentro do proprio objeto
    // O this da prioridade para o que esta dnetro do objeto antes de executar a mesma coisa em outro trecho do codigo
    //this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome;
    // Este sobrescreve o prototype. Já é a referencia interna, que vem da proto da função
}

// Pessoa.prototype === pessoa1.__proto__
// Pessoa.prototype.estouAqui = 'kkkkkkk'; // faz a mesma coisa para todos os objeto vindos de Pessoa
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};


// instancia
const pessoa1 = new Pessoa('Eduardo', 'Martins');
const pessoa2 = new Pessoa('Eduardo', 'Martins');
const data = new Date();

console.dir(pessoa1);
console.dir(data);


