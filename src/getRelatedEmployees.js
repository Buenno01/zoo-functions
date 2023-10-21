const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;

  let manager = false;

  employees.forEach((employee) => {
    if (employee.managers.includes(id)) {
      manager = true;
    }
  });

  return manager;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const { employees } = data;
  const managedPeople = [];
  employees.forEach((person) => {
    if (person.managers.find((manager) => manager === managerId)) {
      managedPeople.push(`${person.firstName} ${person.lastName}`);
    }
  });

  return managedPeople;
};

module.exports = { isManager, getRelatedEmployees };
