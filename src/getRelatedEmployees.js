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
  // seu código aqui
};

module.exports = { isManager, getRelatedEmployees };
