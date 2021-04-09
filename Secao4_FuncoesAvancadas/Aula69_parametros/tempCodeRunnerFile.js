function funcao() {
    console.log(arguments[5]);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao2() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao2('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
funcao2();