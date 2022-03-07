const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addShift = (object, key, value) => {
  object[key] = value;
}
  addShift(lesson2, "turno", "noite");

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => {
  console.log(Object.keys(object));
}
  listKeys(lesson1);

// Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (object) => {
  const keys = Object.keys(object);
  const length = keys.length;
  console.log(length);
}
  objectLength(lesson1);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (object) => {
  console.log(Object.values(object));
}
  listValues(lesson3);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numberOfStudents = (object) => {
  const keys = Object.keys(object)
  let total = 0;
  for(alunos in keys){
    total += object[keys[alunos]].numeroEstudantes;
  }
  console.log(total)
}
  numberOfStudents(allLessons);

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const valueIndex = (object, index) => {
  const keys = Object.keys(object);
  console.log(keys[index])
}
  valueIndex(lesson1, 1)

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

const validateKeyValue = (object, key, value) => {
  let equal = false;
  const entries = Object.entries(object);
  for(let index = 0; index < entries.length; index += 1){
    if(entries[index][0] === key && entries[index][1] === value){
      equal = true;
    }
}
  console.log(equal);
 }
  validateKeyValue(lesson1, "materia", "Matemática")

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.

const math = (object) => {
  let total = 0
  const keys = Object.keys(object)
  for(let chaves in keys){
    if(object[keys[chaves]].materia === "Matemática"){
      total += object[keys[chaves]].numeroEstudantes
    }
  }
  console.log(total);
}
  math(allLessons)

  // Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

const createReport = (object, teacher) => {
  let lessons = [];
  let students = 0;
  const values = Object.values(object);
  for(let value in values){
    if(values[value].professor === teacher){
      lessons.push(values[value].materia)
      students += values[value].numeroEstudantes;
    }
  }
  const prof = {professor: teacher};
  const materias = {aulas: lessons}
  const alunos = {estudantes: students}
  const report = Object.assign({}, prof, materias, alunos);
  console.log(report)
}
 createReport(allLessons, "Maria Clara")