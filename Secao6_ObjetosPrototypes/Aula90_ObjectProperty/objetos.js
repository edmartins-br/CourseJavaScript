const pessoa = {
    nome: 'eduardo',
    sobrenome: 'Martins'
};

// const chave = 'nome';
// console.log(pessoa[chave]); // utilizar chave como uma variavel em casos onde não se saiba qual chave sera usada até que o usuário tome uam ação

// Fazendo a mesma coisa de forma diferente

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 34;
pessoa1.falarnome = function(){
    console.log(`${this.nome} está falando seu nome`);
};
pessoa1.getDtNasc = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

//console.log(pessoa1);
pessoa1.falarnome();
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.getDtNasc());
//console.log(pessoa, pessoa1);

// Apagar a chave nome
//delete pessoa1.nome;
// Posso criar um objeto que representa um formulario ou uma base de dados

for (chave in pessoa1)  {
    console.log(chave);
    console.log(pessoa1[chave]);
}


// CRIANDO MOLDE COM FACTORY FUNCTION OU COM CONSTRUCTOR FUNCTION

// FACTORY FUNCTION
function criaPessoa(nome, sobrenome)    {
    return{
        nome,
        sobrenome,
        get nomeCompleto()  {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa( 'Luiz', 'Otavio');
console.log(p1.nomeCompleto());

// CONSTRUCTOR FUNCTION

function Pessoa(nome, sobrenome)    {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Luiz', 'Otavio');
// Object.freeze(p2) / serve para travar o objeto, nao pode ser alterado
console.log(p2);