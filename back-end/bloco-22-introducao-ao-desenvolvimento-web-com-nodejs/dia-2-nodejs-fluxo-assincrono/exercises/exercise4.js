const fs = require('fs').promises;

const readNamesAA = async () => {
  try {
    const response = await fs.readFile('./simpsons.json');
    const parseNames = JSON.parse(response);
    const names = parseNames.map(({id, name}) => `${id} - ${name}`);
    console.log(names);;
  } catch (error) {
    console.log(error);
  }
}

// -------------------------------------------------------------------------------- //

const readNamesTC = () => {
  fs.readFile('./simpsons.json')
    .then((data) => {
      const parseNames = JSON.parse(data);
      const names = parseNames.map(({id, name}) => `${id} - ${name}`);
      console.log(names);
    })
    .catch((err) => console.log(err));
  fs.readFile('./simpsons.json');
}

// -------------------------------------------------------------------------------- //

const getSimpsonByID = async (simpsonId) => {
  const file = await fs.readFile('./simpsons.json')
  const fileToJSON = JSON.parse(file);
  const simpson = fileToJSON.find(({id}) => id == simpsonId);
  return promise = new Promise((res, rej) => { 
      simpson 
        ? res(simpson)
        : rej(new Error('[ERROR] - id inválido'));
  })
}

const main = async () => {
  try {
    const simpson = await getSimpsonByID(5);
    console.log(simpson);

  } catch (error) {
    console.log(error.message);
  }
}

// -------------------------------------------------------------------------------- //

const removeIDs = async () => {
  const read = await fs.readFile('./simpsons.json');
  const fileToJSON = JSON.parse(read);
  const removeSixAnTen = fileToJSON.filter(({id}) => id != '6' && id !== '10');
  await fs.writeFile('./simpsons.json', JSON.stringify(removeSixAnTen));
}

// -------------------------------------------------------------------------------- //

const createNewSimpsonsFile = async () => {
  const read = await fs.readFile('./simpsons.json');
  const fileToJSON = JSON.parse(read);
  const onlyOneAndFour = fileToJSON.filter(({id}) => id <= 4);
  await fs.writeFile('simpsonFamily.json', JSON.stringify(onlyOneAndFour));
}

// -------------------------------------------------------------------------------- //

const addNelson = async () => {
  const readNonFamily = await fs.readFile('./simpsons.json');
  const fileToJSON = JSON.parse(readNonFamily);
  const nelson = fileToJSON.find(({name}) => name === "Nelson Muntz");

  const readFamily = await fs.readFile('./simpsonFamily.json');
  const familyToJSON = JSON.parse(readFamily);
  familyToJSON.push(nelson);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(familyToJSON));
}


// -------------------------------------------------------------------------------- //

const replaceNelsonForMaggie = async () => {
  const readNonFamily = await fs.readFile('./simpsons.json');
  const fileToJSON = JSON.parse(readNonFamily);
  const maggie = fileToJSON.find(({name}) => name === "Maggie Simpson");
  
  const readFamily = await fs.readFile('./simpsonFamily.json');
  const familyToJSON = JSON.parse(readFamily);
  const addMaggie = familyToJSON.map((simpson) => {
    if (simpson.name === "Nelson Muntz") {
      simpson = maggie;
    }
    return simpson;
  });
  
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(addMaggie))
}

// -------------------------------------------------------------------------------- //
