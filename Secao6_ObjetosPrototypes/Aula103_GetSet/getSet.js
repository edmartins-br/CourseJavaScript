const _velocidade = Symbol('velocidade');
// a cada vez que chamar o Symbol, sele virá aleatorio

class Carro {
    constructor(nome)   {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    set velocidade(valor) {
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar()  {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar()    {
        if(this[_velocidade] <= 100) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// for(let i = 0; i <= 200; i++)   {
//     c1.acelerar();
//     console.log(`acelerando: ${i}`);
// }


// PROBLEMA - COMO PREVINIR
// ALGUEM IMPUTOU UM VALOR A [_velocidade] QUE NÃO SERI APERMITIDA E MESMO ASSIM O ALGORITMO ACATOU
// CRIAR UMA VARIAVEL PRIVADA QUE NINGUEM FORA DA CLASSE PODE ALTERAR
// DADO PRIMITIVO SYMBOL PARA CRIAR CHAVE PROVADA


c1.velocidade = 200; // aqui estou acessando o set
console.log(c1.velocidade); // quando peço o valro da velocidade estou acessando o Get

// AO USAR O GET, A FUNCAO TORNA-SE UM ATRIBUTO, NAO RPECISANDO DE PARENTESES NA CHAMADA
// QUANDO É APENAS UMAS FUNÇÃO SEM O GET NA FRENTE, PRECISA COLOCAR O PARENTES AO CHAMAR

