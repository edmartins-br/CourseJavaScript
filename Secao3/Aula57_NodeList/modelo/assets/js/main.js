const paragrafos = document.querySelector('.paragrafos');
// querySelector só retorna um elemento, apenas o primiro qeu ele encontrar.
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
}