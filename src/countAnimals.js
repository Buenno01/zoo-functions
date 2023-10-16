const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;

  if (!animal) {
    let returnedObj = {};
    species.forEach((specie) => {
      const temporaryObj = {};
      temporaryObj[specie.name] = specie.residents.length;

      returnedObj = { ...returnedObj, ...temporaryObj };
    });
    return returnedObj;
  }

  if (animal.sex) {
    let counter = 0;
    const object = species.find((e) => e.name === animal.species);
    object.residents.forEach((individual) => {
      counter += individual.sex === animal.sex
        ? 1
        : 0;
    });
    return counter;
  }

  if (animal.species) {
    return species.find((e) => e.name === animal.species).residents.length;
  }
  // seu código aqui
};

module.exports = countAnimals;
