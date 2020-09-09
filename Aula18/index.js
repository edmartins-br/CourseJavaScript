
const pessoa1 = {
    nome: 'Eduardo',
    sobrenome: 'Martins',
    idade: 33,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
        console.log(`${this.nome} ${this.sobrenome} está falando oninput...`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();






// chaves criam objetos, colchetes criam arrays
// função Factory - cria objetios

// function criaPessoa (nome, sobrenome, idade){
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Eduardo', 'Machado', 33);
// const pessoa2 = criaPessoa('Marilia', 'Machado', 33);
// const pessoa3 = criaPessoa('zuleika', 'Machado', 33);
// const pessoa4 = criaPessoa('Eduardo', 'Zarur', 33);
// const pessoa5 = criaPessoa('Stela', 'Martins', 33);

// console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);



// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);