let string1 = "eduardo machado martins";
let string3 = "Um\texto"; // apenas uam barra invertida faz o escape do proximo caractere 
let string4 = "Um\\texto"; // para colcoar uma barra invertida é preciso colocar duas
let string5 = "o rato roeu a roupa do rei de roma."

console.log(string1)
console.log(string3)
console.log(string4)

console.log(string1[4]); // pega o caractere da posição com índice 4
console.log(string1.charAt(4)); // mostra o caractere que está na posição 4 da String
console.log(string1.charCodeAt(4)); // codigo ASCCI do caractere na posição 4 da string
console.log(string1.replace('eduardo', 'Stela')); // substitui um o texxto indicado (é case sensitive
console.log(string5.replace(/r/g, '#')); // se nao colocar o "g" subsstitui apenas a primeira ocorrencia
console.log(string1.length);
console.log(string1.slice(2, 8)); // ver substring
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());


