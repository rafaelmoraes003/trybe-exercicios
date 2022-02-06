let array = ['java', 'javascript', 'python', 'html', 'css'];
let highest = array[0];
let lowest = array[0];

for (let index = 0; index < array.length; index += 1){
    if(array[index].length > highest.length){
        highest = array[index];
    }
    if (array[index].length < lowest.length){
        lowest = array[index];
    }
}
console.log(highest);
console.log(lowest);