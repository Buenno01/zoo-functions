const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const animalsList = [];

  if (ids === undefined) {
    return animalsList;
  }

  ids.forEach((id) => {
    animalsList.push(data.species.find((animal) => animal.id === id));
  });

  return animalsList;
};

getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274');

module.exports = getSpeciesByIds;
