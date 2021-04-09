// new Date(0);
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;

function globalTimer(){

    function getTimeFromSeconds(seconds){
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    function timeRun(){
        timer = setInterval(function(){
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }    
    
    // FAZENDO DESTA MANEIRA, PODEMOS OTIMIZAR O CODIGO PARA CONSUMIR MENOS RECURSO
    // CASO HOUVESSEM MUITO EVENTLISTENER.
    document.addEventListener('click', function(e){
        // console.log(e.target);
        const element = e.target;
        // console.log(el);
        if (element.classList.contains('zerar')){
            //console.log('Voce clicou em zerar!');
            clearInterval(timer);
            relogio.classList.remove('pausado');
            //alert('O TEMPO FOI ZERADO!');
            relogio.innerHTML = '00:00:00';
            seconds = 0;
        }
    
        if (element.classList.contains('iniciar')){
            // alert('Cliquei no INICIAR');
            relogio.classList.remove('pausado'); // remove o CSS para trocar a cor
            clearInterval(timer);
            timeRun();
            // relogio.innerHTML = 'Cliquei no Iniciar';
        }
    
        if (element.classList.contains('pausar')){
            relogio.classList.add('pausado'); // adiciona o CSS para trocar a cor
            // alert('TEMPO PAUSADO!');
            clearInterval(timer);
        }
    
    })
}

globalTimer();



// TROCAMOS ESTE CODIGO POR APENAS UM ADD EVENT LISTENER, AQUI TINHA VARIOS
// iniciar.addEventListener('click', function(event) {    
// });

// pausar.addEventListener('click', function(event) {    
// });

// zerar.addEventListener('click', function(event) {  
// });