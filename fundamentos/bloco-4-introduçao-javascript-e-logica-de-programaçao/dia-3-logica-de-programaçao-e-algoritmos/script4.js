let primo = 0;
let quantidade = 0;
let isPrime;

for(let index = 0; index <= 50; index += 1){
    if(index == 0 || index == 1){
        isPrime = false;
    } else{
        isPrime = true;
    }
    for(let index2 = 2; index2 < index; index2 += 1){
        if((index%index2)==0){
            isPrime = false;
        }
    }
    if(isPrime){
        primo = index;
        quantidade += 1;
    }
}
console.log(primo, quantidade);