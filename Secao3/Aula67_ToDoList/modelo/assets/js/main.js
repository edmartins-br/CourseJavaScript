const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');



function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    // console.log(e); // mostra no console dados da tecla pressionada
    if (e.keyCode === 13) {
        //alert('ENTER pressionado');
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBtnApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'X';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefa();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    console.log(inputTarefa.value);
});

// APAGAR UMA TAREFA
document.addEventListener('click', function(e){
    const element = e.target;

    if (element.classList.contains('apagar')) {
        // console.log('Apagar clicado');
        // console.log(element.parentElement);
        element.parentElement.remove();
        salvarTarefa();
    }
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    console.log(liTarefas);
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('X', '').trim();
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
        
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON); // só pode salvar strings
    // console.log(tarefasJSON);
}

// traz as tarefas salvas no navegador
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // converte o JSON para um array

    for (let tarefa2 of listaDeTarefas) {
        criaTarefa(tarefa2);
    }
}

adicionaTarefasSalvas();