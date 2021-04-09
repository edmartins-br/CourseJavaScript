// IIFE - imediatly invoke function expresion - criada e invocada ao mesmo tempo

function meuEscopo(){
    const form = document.querySelector('.form'); // selecionando a classse do form // usar ponto para selecinar a classe
    const resultado = document.querySelector('.resultado');

    // DECLARA UM ARRAY DE PESSOAS PARA SALVAR OS REGISTROS INSERIDOS NOS CAMPOS
    const pessoas = [];
   
    // FUNÇÃO QUE PREVINE A PAGIAN DE RECARREGAR E SELECIONE OS CAMPOS NO FRONT
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        //ADICIONA OS VALORES DOS CAMPOS DENTRO DO ARRAY PESSOAS
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);

        // IMPRIME O RESULTADO NO HTML FRONT HTML
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + 
        `${peso.value} ${altura.value}</p>`;

        console.log(nome, sobrenome, peso, altura);
    }
    form.addEventListener('submit', recebeEventoForm);
    // form.onsubmit = function (evento){
    //     evento.preventDefault(); // mata o evento padrao do browser que atualiza a tela ao clicar no botao enviar.
    //     alert(1);
    //     console.log('Foi enviado!')
    // };
}
meuEscopo();