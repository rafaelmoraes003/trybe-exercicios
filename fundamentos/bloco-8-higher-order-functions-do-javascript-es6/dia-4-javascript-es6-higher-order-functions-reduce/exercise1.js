const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
  
// Dada uma matriz, transforme em um array

function flatten(array) {
  return array.reduce((accumulator, currentValue) => accumulator.concat(currentValue))
}

console.log(flatten(arrays))
