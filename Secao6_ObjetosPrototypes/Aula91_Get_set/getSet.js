// Getter and Setter

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // permite reconfigurar a chave ou nao, ou seja, pode criar as configurações novamente
        
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad Value!');
            return;
            }  
            
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome){
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor. replace('coisa,', '');
        }
    };
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1);
p1.nome = 'qualuqer coisa';
console.log(p1.estoque);
