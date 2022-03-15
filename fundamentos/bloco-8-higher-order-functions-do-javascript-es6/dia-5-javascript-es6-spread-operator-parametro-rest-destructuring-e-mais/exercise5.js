// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .

const myList = [1, 2, 3];

const swap1 = ([a, b, c]) => [c, b, a] // FORMA REDUZIDA

const swap2 = (arrayOfThreeElements) => {
  const [primeiroElemento, segundoElemento, terceiroElemento] = arrayOfThreeElements;
  return [terceiroElemento, segundoElemento, primeiroElemento];
}

console.log(swap1(myList))
console.log(swap2(myList))