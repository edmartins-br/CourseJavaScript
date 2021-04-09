// FACTORY FUNCTION

// 01
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome, 
//         sobrenome,
//         //fala: function(assunto) {
//             fala(assunto) {
//                 return `${nome} está ${assunto}. Peso: ${this.peso}`;
//             // this é o mesmo que dizer p1.peso
//             // this se refere ao objeto inteiro no qual esta inserido
//         },
//         altura: a,
//         peso: p,
//         imc() {
//             const indice = this.peso / (this.altura ** 2);
//             return indice.toFixed(2);
//         }
//     };
// }

// console.log(p1.fala('falando sobre JS'));
// const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
// console.log(p1.imc());


// ====================================================
// 02
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`    
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        //fala: function(assunto) {
            fala(assunto = 'falando sobre nada') {
                return `${nome} está ${assunto}. Peso: ${this.peso}`;
            // this é o mesmo que dizer p1.peso
            // this se refere ao objeto inteiro no qual esta inserido
        },
        altura: a,
        peso: p,
        // getter
        get imc() { // o "get" faz a funcao ser interpretada como um atributo, não precisando dos parentses para chamar
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Eduardo Machado Martins'; // Setter

console.log(p1.nomeCompleto); // utilizando o GET
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());


