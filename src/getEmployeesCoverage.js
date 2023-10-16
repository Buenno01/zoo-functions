const data = require('../data/zoo_data');

function getGeneralCoverage() {
  const { employees, species } = data;
  const generalCoverage = [];
  employees.forEach((employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    const locations = [];
    const animals = [];
  
    species.forEach((animal) => {
      if (responsibleFor.includes(animal.id)){
        locations.push(animal.location);
        animals.push(animal.name);
      }
    });
  
    generalCoverage.push({
      id,
      fullName: `${firstName} ${lastName}`,
      species: animals,
      locations,
    });
  });

  return generalCoverage;
}

const getEmployeesCoverage = (object) => {
  const generalCoverage = getGeneralCoverage();
  let specificEmployee;

  if (!object) {
    return generalCoverage;
  }
  if (object.name) {
    specificEmployee = generalCoverage.find((person) => person.fullName.includes(object.name));
  }
  if (object.id) {
    specificEmployee = generalCoverage.find((person) => person.id === object.id);
  }
  if (!specificEmployee) {
    throw new Error('Informações inválidas');
  }
  return specificEmployee;
};

module.exports = getEmployeesCoverage;
