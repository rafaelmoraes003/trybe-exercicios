// AULA AO-VIVO - EXERCÍCIO 1;

let sum = 0;

for(let index = 1; index <= 50; index +=1){
    sum += index
}
console.log("A soma dos números de 1 a 50 é: " + sum)


///////////////////////////////////////////////////////////////////////////////////////////////////////

// AULA AO-VIVO - EXERCÍCIO 2;

soma = 0;

for (let index = 2; index <=150; index +=1){
    if ((index%3)==0){
        soma += 1;
    }
}
if(soma == 50){
    console.log(soma + ": mensagem secreta");
} else{
    console.log(soma);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////

// AULA AO-VIVO - EXERCÍCIO 3;

let lista = ["Pedra", "Papel", "Tesoura"];

let elemento1 = lista[Math.floor(Math.random() * lista.length)];
let elemento2 = lista[Math.floor(Math.random() * lista.length)];

console.log(`Jogador1: ${elemento1}!`);
console.log(`Jogador2: ${elemento2}!`);

if(elemento1 == elemento2){
    console.log("Empate!")
} else if(elemento1 == "Tesoura" && elemento2 == "Papel"){
    console.log("Jogador 1 ganhou!");
} else if(elemento1 == "Tesoura" && elemento2 == "Pedra"){
    console.log("Jogador 2 ganhou!");
} else if(elemento1 == "Pedra" && elemento2 == "Tesoura"){
    console.log("Jogador 1 ganhou!");
} else if (elemento1 == "Pedra" && elemento2 == "Papel"){
    console.log("Jogador 2 ganhou!")
} else if (elemento1 == "Papel" && elemento2 == "Pedra"){
    console.log("JOgador 1 ganhou!");
} else if(elemento1 == "Papel" && elemento2 == "Tesoura"){
    console.log("Jogador 2 ganhou!");
} else {
    console.log("ERRO!");
}


///////////////////////////////////////////////////////////////////////////////////////////////////////

let fatorial = 10;
let size = fatorial;

for(let index = 1; index <= 10; index += 1){
    size *= index;
}
console.log(size);


///////////////////////////////////////////////////////////////////////////////////////////////////////

let word = "tryber"
let position;

position = word.split('').reverse().join('');

console.log(position);


/////////////////////////////////////////////////////////////////////////////////////////////////////


let array = ['java', 'javascript', 'python', 'html', 'css'];
let highest = array[0];
let lowest = array[0]

for (let index = 0; index < array.length; index += 1){
    if(array[index].length > highest.length){
        highest = array[index];
    }
}
for (let index2 = 0; index2 < array.length; index2 += 1){
    if(array[index2].length < lowest.length){
        lowest = array[index2];
    }
}

console.log("a maior palavra é: " + highest);
console.log("a menor palavra é: " + lowest);


///////////////////////////////////////////////////////////////////////////////////////////////////////


let primo = 0;
let isPrime;

for (let index = 0; index <= 50; index += 1){
    if(index === 0 || index ===1){
        isPrime = false;
    } else{
        isPrime = true;
    }
        for (let index2 = 2; index2 < index; index2 += 1){
            if(index%index2==0){
                isPrime = false;
            }
    }
    if(isPrime){
        primo += 1;
    }
}
console.log(primo);