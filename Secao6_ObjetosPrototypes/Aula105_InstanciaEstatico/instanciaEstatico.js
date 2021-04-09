class ControleRemeto    {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, trocar a pilha.');
    }
}

const controle1 = new ControleRemeto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
console.log(controle1);

//neste caso não preciso passar p controle1 criado, não precisamos do NEW para criar os dados do objeto

ControleRemeto.trocaPilha(); // só tem acesso pela classe pois é estatico
// Aqui não estamos instaciando a classe, nao temos acesso aos dados da classe.