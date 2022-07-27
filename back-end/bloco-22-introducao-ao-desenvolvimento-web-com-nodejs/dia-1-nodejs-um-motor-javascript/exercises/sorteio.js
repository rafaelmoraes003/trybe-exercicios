const readline = require('readline-sync');

const prizeDraw = (number) => {
    const randNumber = Math.floor(Math.random() * 11);
    if (number === randNumber) {
        return "Parabéns, número correto!"
    }
    return `Opa, não foi dessa vez. O número era ${randNumber}`;
}

const renderDraw = () => {
    const number = readline.questionInt("Digite um número: ");
    console.log(prizeDraw(number));
}

const main = () => {
    renderDraw();
    const playAgain = readline.question("Deseja jogar novamente? (s/n) ");
    if (playAgain !== "s") return console.log('Até a próxima!')
    main();
}

main();

module.exports = main ;