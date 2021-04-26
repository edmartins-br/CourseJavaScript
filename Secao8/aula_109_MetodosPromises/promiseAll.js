function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
} 

function wait(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {  
            if (typeof msg !== 'string') {
                reject('ERRO 404');
                return;s
            }

            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo);
    });
}

const promises = [
    wait('Promise 1', 3000),
    wait('Promise 2', 500),
    wait('Promise 3', 1000),
];

// Promise.all(promises) // entrega todas as promessas, e uma der errado ele rejeita todas
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     });


// Promise.race(promises) // entrega a primeira promessa qeu for resolvida, mas não deixa de executar o resto das promessas
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     });

function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Pagina baixada do cache!');
    } else{
        return wait('Baixei a página do servidor', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e=> console.log('ERRO', e));