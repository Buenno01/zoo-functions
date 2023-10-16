const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const count = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((person) => {
    if (person.age >= 50) {
      count.senior += 1;
    } else if (person.age < 18) {
      count.child += 1;
    } else {
      count.adult += 1;
    }
  });

  return count;
};

const calculateEntry = (entrants) => {
  let totalEntry = 0;

  if (entrants && entrants.length > 0) {
    const count = countEntrants(entrants);
    const values = {
      child: 20.99,
      senior: 24.99,
      adult: 49.99,
    };

    ['child', 'senior', 'adult'].forEach((age) => {
      totalEntry += count[age] * values[age];
    });
  }

  return parseFloat(totalEntry.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
