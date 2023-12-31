const data = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  const { employees } = data;

  if (name === undefined) {
    return {};
  }

  return (employees.find((employee) => [employee.firstName, employee.lastName].includes(name)));
};

module.exports = getEmployeeByName;
