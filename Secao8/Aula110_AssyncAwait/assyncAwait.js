function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
} 

function esperar(msg, tempo) {
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

async function executa(){
    try {
        const fase1 = await esperar('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperar(2, rand());
        console.log(fase2);

        const fase3 = await esperar('Fase 3', rand());
        console.log(fase3);

        console.log('Finalizamos com a ', fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();
