const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;

  const eachAnimalCount = {};
  species.forEach((specie) => {
    eachAnimalCount[specie.name] = specie.residents.length;
  });

  if (!animal) {
    return eachAnimalCount;
  }

  if (animal.sex) {
    let counter = 0;
    const { residents } = species.find((e) => e.name === animal.species);
    residents.forEach((individual) => {
      counter += individual.sex === animal.sex ? 1 : 0;
    });
    return counter;
  }

  return eachAnimalCount[animal.species];
};

module.exports = countAnimals;
