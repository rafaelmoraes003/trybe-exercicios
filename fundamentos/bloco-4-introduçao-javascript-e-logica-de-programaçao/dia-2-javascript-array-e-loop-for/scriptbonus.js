// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let indexUm = 1; indexUm < numbers.length; indexUm += 1){
//     for (let indexZero = 0; indexZero < numbers.length; indexZero += 1){
//         if(numbers[indexZero] > numbers[indexUm]){
//             let posicao = numbers[indexZero];
//             numbers[indexZero] = numbers[indexUm];
//             numbers[indexUm] = posicao;
//         }
//     }
// }
// console.log(numbers);



// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let indexUm = 1; indexUm < numbers.length; indexUm += 1){
//     for (let indexZero = 0; indexZero < numbers.length; indexZero += 1){
//         if(numbers[indexZero] < numbers[indexUm]){
//             let posicao = numbers[indexUm];
//             numbers[indexUm] = numbers[indexZero];
//             numbers[indexZero] = posicao;
//         }
//     }
// }
// console.log(numbers);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

for (let index = 0; index < numbers.length; index += 1){
    if(index + 1 < numbers.length){
        array.push(numbers[index]*numbers[index + 1]);
    } else{
        array.push(numbers[index]*2)
    }
}
console.log(array);