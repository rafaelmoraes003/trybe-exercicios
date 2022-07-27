const readline = require('readline-sync');

const fibonacci = (n) => {
    if (n <= 0) {
        return 'Insira um número válido maior que 0';
    }

    const fib = [];

    for (let i = 0; i < n; i += 1) {
        if (i < 2) {
            fib.push(i);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }

    return fib;
}

const message = "Insira a quantia máxima de números da sequência de fibonacci: "

const fibMax = readline.questionInt(message);

console.log(fibonacci(fibMax));