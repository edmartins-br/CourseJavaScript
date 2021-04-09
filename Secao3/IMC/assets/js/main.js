//
const form = document.querySelector('#dados'); // selecionando a classse do form // usar ponto para selecinar a classe

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Evento interrompido!');
    // pega o input dos campos atraves do ID
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // pega o input e transforma num Number para que se possa fazer a conta
    const peso = Number(inputPeso.value); // value é SEMPRE minusculo
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);


    if (imc <= 18.5){
        setResultado(`Seu IMC é ${imc}. (Abaixo do peso)`, false);
        return;
    }
    if (imc >= 18.5 && imc <= 24.9 ){
        setResultado(`Seu IMC é ${imc}. (Peso normal)`, false);
    }
    if (imc >= 25 && imc <= 29.9 ){
        setResultado(`Seu IMC é ${imc}. (Sobrepeso)`, false);
    }
    if (imc >= 30 && imc <= 34.9 ){
        setResultado(`Seu IMC é ${imc}. (Obesidade 01)`, false);
    }
    if (imc >= 35 && imc <= 39.9 ){
        setResultado(`Seu IMC é ${imc}. (Obesidade 02)`, false);
    }
    if (imc >= 40 ){
        setResultado(`Seu IMC é ${imc}. (Obseidade 03)`, false);
    }

    console.log(peso, altura);

});

// Função para inserir um texto HTML na DIV com id Resultado
function criaP(){
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
    console.log('Cheguei aqui...');

}
