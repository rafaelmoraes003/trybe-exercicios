const readline = require('readline-sync');

const calcFatorial = (n) => {
    if (n > 0) {
        let fatorial = 1;
        for(let i = n; i > 0; i -= 1) {
            fatorial *= i
        }
        return `A fatorial de ${n} é ${fatorial}`;
    }
    return "Insira um número válido maior que zero"
}

const fatorial = readline.questionInt("Insira um número para o cálculo de fatorial: ")

console.log(calcFatorial(fatorial));