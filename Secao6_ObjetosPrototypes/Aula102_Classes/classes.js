// class Pessoa{
//     constructor(){

//     }
// }

// NÃO PRECISA USAR PONTO E VIRGULA NA CLASSE
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Eduardo', 'Martins');
const p2 = new Pessoa('Luiz', 'Otavio');
const p3 = new Pessoa('Stela', 'Martins');
const p4 = new Pessoa('Zuleika', 'Martins');

console.log(p1.beber());
console.log(p2.falar());
console.log(p3.comer());
console.log(p4.falar());