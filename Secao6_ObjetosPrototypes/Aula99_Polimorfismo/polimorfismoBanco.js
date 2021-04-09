function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        this.verSaldo();
        console.log('Saldo Insuficiente!');
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) { 
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag: ${this.agencia} 'CC:' ${this.conta} Saldo: R$${this.saldo.toFixed(2)}`);
};


function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;


CC.prototype.sacar = function(valor) {
    if (this.saldo > (this.saldo + this.limite)) {
        this.verSaldo();
        console.log('Saldo Insuficiente!');
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};


const conta1 = new Conta (7941, String('00980-0'), 10);
console.log(conta1);
// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(15);
// conta1.sacar(17);
const cc = new CC (7941, 22, 10, 100);
cc.depositar(10);
