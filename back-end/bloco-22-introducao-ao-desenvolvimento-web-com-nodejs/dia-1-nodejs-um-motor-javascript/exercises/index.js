const readline = require('readline-sync');

const scripts = [
    { name: 'imc', path: './imc' },
    { name: 'valocidade média', path: './velocidade' },
    { name: 'sorteio', path: './sorteio' },
];

const questions = scripts.map((script, index) => {
    return `\n${index + 1} - ${script.name}`
})

const question = readline.questionInt(`Escolha um script: ${questions} \n`);

require(`./${scripts[question - 1].path}`);