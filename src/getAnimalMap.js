const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesLocation() {
  const map = { NW: [], NE: [], SW: [], SE: [] };

  species.forEach((animal) => {
    map[animal.location] = [...map[animal.location], animal.name];
  });

  return map;
}

function getAnimalsNames(sort) {
  const map = { NW: [], NE: [], SW: [], SE: [] };

  species.forEach((animal) => {
    const animalObject = {};
    const names = animal.residents.map((e) => e.name);

    if (sort) names.sort();

    animalObject[animal.name] = names;

    map[animal.location] = [...map[animal.location], animalObject];
  });

  return map;
}

function getAnimalsBySex(sex, sort) {
  const map = { NW: [], NE: [], SW: [], SE: [] };

  species.forEach((animal) => {
    const animalObject = {};
    const filter = animal.residents.map((e) => {
      if (e.sex === sex) return e.name;
      return undefined;
    });

    if (sort) filter.sort();

    animalObject[animal.name] = filter.filter((e) => {
      if (!e) return false;
      return true;
    });

    map[animal.location] = [...map[animal.location], animalObject];
  });

  return map;
}

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return getSpeciesLocation();

  if (options.sex) return getAnimalsBySex(options.sex, options.sorted);

  return getAnimalsNames(options.sorted);
};

module.exports = getAnimalMap;
