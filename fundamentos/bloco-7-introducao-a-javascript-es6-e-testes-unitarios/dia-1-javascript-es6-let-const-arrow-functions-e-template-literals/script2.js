///////////////////////////////////////// FATORIAL

const fatorial = (n) => {
    let resultado = 1
    for (let i = 2; i <= n; i += 1){
        resultado *= i
    }
    console.log(resultado);
}
 fatorial(5)

///////////////////////////////////////// MAIOR PALAVRA

const longestWord = (phrase) => {
    let splited = phrase.split(" ")
    let highest = splited[0]
    for(let index = 0; index < splited.length; index += 1){
        if(splited[index].length > highest.length){
            highest = `${splited[index]}`
        }
    }
    console.log(highest)
}
 longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")

///////////////////////////////////////// NÚMERO DE CLIQUES

const btn = document.querySelector('button');
const span = document.querySelector('span')

let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount += 1;
    span.innerHTML = `${clickCount}`
})

///////////////////////////////////////// TROCAR LETRAS E ADICIONAR SKILLS EM ORDEM ALFABÉTICA

const skills = ["JavaScript", "HTML", "CSS", "Python", "GitHub"]

const changeX = (string) => {
    let phrase = "Tryber x aqui!";
    let splited = phrase.split(" ");
    for (let index = 0; index < splited.length; index += 1){
        if(splited[index] === "x"){
            phrase = `Tryber ${string} aqui!`
            return phrase
        }
    }
}

const sortedSkills = skillsArray => {
    let sorted = skills.sort();
    console.log(`${changeX("Rafael")} Minhas cinco principais habilidades são: --> ${sorted} <--.
    #goTrybe!`)
}
 sortedSkills(skills);