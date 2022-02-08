let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos");
console.log(player.bestInTheWorld + " - A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes");
console.log("a jogadora possui " + player.medals.silver + " medalhas de prata e " + player.medals.golden + " medalhas de ouro." );


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for(let key in names){
    console.log("Olá, " + names[key] + "!");
}

//////////////  ///////////////////////   /////////////

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let key in car){
    console.log(key, car[key]);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


