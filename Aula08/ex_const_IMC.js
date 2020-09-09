// exercicio massa corporal IMC

const nome = "Eduardo";
const sobrenome = "Martins";
const idade = 33;
const peso = 127;
const altura = 1.88;
let imc = (peso / (altura*altura)); // peso / (altura * altura)
let anoNascimento = 2020 - idade;

console.log(nome, sobrenome, "tem", idade, "anos de idade, e pesa", peso, "Kg.");
console.log("Tem " + altura + " de altura, e seu IMC é de: " + imc + ".");
console.log(`${nome} nasceu no ano de ${anoNascimento}.`) // esta é a maneira mais moderna de se escrever

if (imc >= 25) {
    console.log("CUIDADO: Você está obeso!");
}
else {
    console.log("Voce está no peso Normal!");
}