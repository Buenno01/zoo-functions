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

  if (!object) {
    return generalCoverage;
  }
};

module.exports = getEmployeesCoverage;
