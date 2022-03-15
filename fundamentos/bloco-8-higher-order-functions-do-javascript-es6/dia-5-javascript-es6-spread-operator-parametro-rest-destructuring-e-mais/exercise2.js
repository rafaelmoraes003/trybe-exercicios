// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...elements) => {
  return elements.reduce((a, b) => a + b);
}

console.log(sum(1,2,3,4,5,6,7,8,9));