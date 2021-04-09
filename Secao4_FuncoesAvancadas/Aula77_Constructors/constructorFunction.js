// Função construtora retorna objetos
// Função fábrica retorna objetos também

// CONSTRUTORA
// Na função construtora, precisamos mudar a convenção de como escrevemos as funções
// é preciso sempre iniciar com letra MAIUSCULA
// ex: Pessoa (new) e NÃO criaPessoa()

function Pessoa (nome, sobrenome)   {
    
    // Atributos privados - não estão disponiveis fora do corpo desta função
    const id = 123;
    const metodointerno = function()  {

    };
    

    // Atributos ou metodos publicos, podem ser acessadas fora da função utilizando ponto(.)
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.metodo = () =>     {
        console.log(this.nome + ': Sou um método.');
    }

}

const p1 = new Pessoa('Eduardo', 'Machado'); // PRECISA DA PALAVRA NEW
const p2 = new Pessoa('Geraldo', 'Martins'); // PRECISA DA PALAVRA NEW

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();

