const getPlanet = () => {
  setTimeout(() => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  }, 4000);
};

// A função getPlanet acima imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

getPlanet(); // imprime Marte depois de 4 segundos