const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// Agora, dado o código acima, qual a ordem de finalização de execução das linhas comentadas?

console.log(planetDistanceFromSun(mars)); // primeiro
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // terceiro
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // segundo