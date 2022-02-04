let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
    media = soma/numbers.length;
}

console.log("A média é: " + media)
if(media > 20){
    console.log("valor maior que 20")
} else {
    console.log("valor não é maior que 20");
}