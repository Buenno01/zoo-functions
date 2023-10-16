const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const { employees, species } = data;
  const firstSpecieId = employees.find((person) => person.id === id)
    .responsibleFor[0];

  const { residents } = species.find((animal) => animal.id === firstSpecieId);

  const theElder = residents.sort((a, b) => b.age - a.age)[0];

  return Object.values(theElder);
};

module.exports = getOldestFromFirstSpecies;
