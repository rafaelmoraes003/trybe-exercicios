const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notes refere-se ao aluno na posição 0 de students , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map 

function studentAverage() {
  return students.map((estudantes, index) => {
    return {
      name: estudantes,
      media: grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
    }
  })
}

console.log(studentAverage());