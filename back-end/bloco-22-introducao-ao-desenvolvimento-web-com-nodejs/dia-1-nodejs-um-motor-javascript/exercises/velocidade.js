const readline = require('readline-sync');

const calcAverageSpeed = (distance, time) => {
    const averageSpeed = (distance / time).toFixed(2);
    return `Velocidade média: ${averageSpeed}`;
}

const distance = readline.questionInt("Qual a distância? ");
const time = readline.questionInt("Qual o tempo? ");
console.log(calcAverageSpeed(distance, time));

module.exports = calcAverageSpeed;