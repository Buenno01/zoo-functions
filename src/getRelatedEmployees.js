const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

  const actualEmployee = employees.find((person) => person.id === id);

  const managers = actualEmployee.managers;

  if (managers.length == 0 || managers[0] == stephanieId) {
    return true;
  }

  return false;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const { employees } = data;
  const managedPeople = [];
  employees.forEach((person) => {
    if (person.managers.find((manager) => manager === managerId)) {
      managedPeople.push(person.firstName + ' ' + person.lastName);
    }
  });

  return managedPeople;
};

module.exports = { isManager, getRelatedEmployees };
