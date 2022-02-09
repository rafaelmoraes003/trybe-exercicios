// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromoTrue (palavra){
    let palindromo;
    if(palavra.split("").reverse().join("") === palavra){
        palindromo = true;
    } else{
        palindromo = false
    }
    return palindromo;
}
console.log(palindromoTrue("arara")) // false


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function highest (){
    let array = [2, 3, 6, 7, 10, 1];
    let maior = array[0];
    for(let index = 0; index < array.length; index += 1){
        if(array[index] > maior){
            maior = index
        }
    }
    return maior
}
console.log(highest());


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowest (){
    let array = [2, 4, 6, 7, 10, 0, -3];
    let menor = array [0];
    for(let index = 0; index < array.length; index += 1){
        if(array[index] < menor){
            menor = index;
        }
    }
    return menor;
}
console.log(lowest());


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome (){
    let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    let highest = nomes[0];
    for(let index = 0; index < nomes.length; index += 1){
        if(nomes[index].length > highest.length){
            highest = nomes[index];
        }
    }
    return highest;
}
console.log(maiorNome());


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));


// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumNumbers (n){
    let soma = 0;
    for(let index = 0; index <= n; index += 1){
        soma += index;
    }
    return soma;
}
console.log(sumNumbers(5))


// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word 

function verificaFimPalavra (word, ending){
    let inverseWord = word.split("").reverse().join(""); // ebyrt
    let inverseEnding = ending.split("").reverse().join(""); // eb
    let result;

    for(let index = 0; index < inverseEnding.length; index += 1){
        if(inverseEnding[index] === inverseWord[index]){
            result = true;
        } else{
            result = false;
        }
    }
    return result;
}
console.log(verificaFimPalavra("trybe","be"));