function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
} 

function wait(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('ERROR 404 - BAD VALUE');
        setTimeout(() => {            
            resolve(msg);
        }, tempo);
    });
}

wait('Conectando com a base de dados...', rand(1, 3))
    .then(response => {
        console.log(response);
        return wait('Buscando dados na base...', rand(1, 3));
    })
    .then(response => {
        console.log(response);
        return wait(2222222, rand(1, 3));
        // return wait('Tratando dados da base...', rand(1, 3));
    })
    .then(response => {
        console.log(response);
    })
    .then(() => {
        console.log('Exibir dados na Tela...');
    })
        .catch(e => {
            console.log('ERRO: ', e);
        });

    console.log('Isso aqui será exibido antes de qualquer PROMISE!');


// wait('Frase 1', rand(1, 3));
// wait('Frase 2', rand(1, 3));
// wait('Frase 3', rand(1, 3));
