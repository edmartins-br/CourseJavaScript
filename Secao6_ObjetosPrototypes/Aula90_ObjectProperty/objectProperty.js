//define property - define properties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valaor - pode tambem receber uam função
        writable: false, // pode permitir ou nao que o valor da variavel seja alterada depois
        configurable: false // permite reconfigurar a chave ou nao, ou seja, pode criar as configurações novamente
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: estoque, // valor - pode tambem receber uam função
            writable: true, // pode permitir ou nao que o valor da variavel seja alterada depois
            configurable: false
        },
        preco: {
            enumerable: true, // mostra a chave
            value: estoque, // valor - pode tambem receber uam função
            writable: false, // pode permitir ou nao que o valor da variavel seja alterada depois
            configurable: false
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000;
//console.log(p1);
// console.log(Object.keys(p1));
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}