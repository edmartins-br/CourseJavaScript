class DispositivoEletronico {
    constructor(nome)   {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado)    {
            console.log(`${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado)    {
            console.log(`${this.nome} já está desligado.`);
            return;
        }

        this.ligado = false;
    }

}

// extends faz herdar tudo da classe DispositivoEletronico
class SmartPhone extends DispositivoEletronico  {
    constructor(nome, cor, modelo)  {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new SmartPhone('iPhone', 'Space Gray', 'XR 12');
s1.ligar();
s1.ligar();
console.log(s1);



// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.ligar();
// console.log(d1);

