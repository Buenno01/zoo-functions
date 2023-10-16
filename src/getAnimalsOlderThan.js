const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const arr = data.species.find((specie) => specie.name === animal);

  const isFalse = arr.residents.find((individual) => individual.age === age);

  if (isFalse) {
    return false;
  }

  return true;
};

module.exports = getAnimalsOlderThan;
