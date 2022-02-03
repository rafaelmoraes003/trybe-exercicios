// EXERCÍCIO 1

const a = 5;
const b = 10;

const soma = a+b;
const subtracao = a-b;
const multiplicacao = a*b;
const divisao = a/b;
const modulo = a%b;

console.log("soma = " + soma);
console.log("subtração = " + subtracao);
console.log("multiplicação = " + multiplicacao);
console.log("divisão = " + divisao);
console.log("módulo = " + modulo);

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 2

const num1 = 5;
const num2 = 10;

if(num1 > num2){
    console.log(num1 + " é maior que " + num2);
} else {
    console.log(num2 + " é maior que " + num1);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 3

const x = 1;
const y = 2;
const z = 3;

if (x > y && x > z){
    console.log(x + " é o maior valor (x)");
} else if(y > x && y > z){
    console.log(y + " é o maior valor (y)");
} else{
    console.log(z + " é o maior valor (z)")
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 4


const valor = 0

if(valor > 0){
    console.log("positive");
} else if (valor < 0){
    console.log("negative");
} else{
    console.log("zero");
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 5

const ang1 = 60;
const ang2 = 100;
const ang3 = 20;
const sum = ang1 + ang2 + ang3;
const positiveAngs = ang1 > 0 && ang2 > 0 && ang3 > 00

if(positiveAngs){
    console.log("todos os ângulos são válidos!")
} else {
    console.log("algum ângulo tem valor negativo; inválido.")
}

if(sum == 180){
    console.log(true)
} else {
    console.log(false)
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 6

let piece = "REI";

switch(piece.toLowerCase()){
    case "rei":
        console.log("rei - horizontal, vertical e diagonal");
        break;
    case "rainha":
        console.log("rainha - horizontal, vertical e diagonal");
        break;
    case "bispo":
        console.log("bispo - diagonal");
        break;
    case "cavalo":
        console.log("cavalo - duas casas em sentido horizontal e mais uma na vertical ou vice-versa."); 
        break;
    case "torre":
        console.log("torre - vertical ou horizontal");
        break;
    case "peão":
        console.log(" peão - movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.");
        break;
    default:
        console.log("essa peça não existe")
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 7

const porcentagem = 170;

if(porcentagem < 0 || porcentagem > 100){
    console.log("ERRO!")
} else if(porcentagem >= 90){
    console.log("A");
} else if (porcentagem >= 80){
    console.log("B");
} else if(porcentagem >= 70){
    console.log("C");
} else if (porcentagem >= 60){
    console.log("D");
} else if(porcentagem >= 50){
    console.log("E");
} else {
    console.log("F")
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 8

const r = 1;
const s = 5;
const t = 3;
const isEven = (r%2) == 0 || (s%2) == 0 || (t%2) == 0;

if(isEven){
    console.log(true);
} else{
    console.log(false);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 9

const u = 7;
const v = 8;
const w = 10;
const isOdd = (u%2) > 0 || (v%2) > 0 || (w%2) > 0;

if(isOdd){
    console.log(true);
} else {
    console.log(false);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 10


const custo = 1;
const venda = 3;
const lucro = ((venda-custo) - (custo*20/100))*1000;
const aviso = custo < 0 || venda < 0;
if (aviso){
    console.log("ERRO! Os valores não podem ser negativos.");
} else {
    console.log(lucro);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCÍCIO 11


const bruto = 3000;
let inss;
let ir;
let liquido;

if(bruto <= 1556.94){
    inss = bruto*8/100;
} else if(bruto >= 1556.95 && bruto <= 2594.92){
    inss = bruto*9/100;
} else if (bruto >= 2594.93 && bruto <= 5189.82){
    inss = bruto*11/100;
} else{
    inss = 570.88;
}

liquido = bruto - inss


if(liquido <= 1903.98){
    ir = 0;
} else if (liquido >= 1903.99 && liquido <= 2826.65){
    ir = (liquido*7.5/100) - 142.80; 
} else if (liquido >= 2826.66 && liquido <= 3751.05){
    ir = (liquido*15/100) - 354.80;
} else if(liquido >= 3751.06 && liquido <= 4664.68){
    ir = (liquido*22.5/100) - 636.13;
} else{
    ir = (liquido*27.5/100) - 869.36;
}

liquido = liquido - ir;
console.log(liquido);