let varA = 'A';
let varB = 'B';
let varC = 'C';

var varTemp = varA;
varA = varB;
console.log(varA);

varB = varC;
console.log(varB)

varC = varTemp;
console.log(varTemp)

// Outra maneira de resolver de forma mais moderna

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);