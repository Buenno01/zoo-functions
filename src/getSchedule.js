const data = require('../data/zoo_data');

const arrDays = [
  {
    day: 'Monday',
    officeHour: 'CLOSED',
  },
  {
    day: 'Tuesday',
    officeHour: 'Open from 8am until 6pm',
  },
  {
    day: 'Wednesday',
    officeHour: 'Open from 8am until 6pm',
  },
  {
    day: 'Thursday',
    officeHour: 'Open from 10am until 8pm',
  },
  {
    day: 'Friday',
    officeHour: 'Open from 10am until 8pm',
  },
  {
    day: 'Saturday',
    officeHour: 'Open from 8am until 10pm',
  },
  {
    day: 'Sunday',
    officeHour: 'Open from 8am until 8pm',
  },
];

const getGeneralSchedule = (species) => {
  const generalSchedule = {};

  arrDays.forEach((el) => {
    const exhibition = el.day === 'Monday'
      ? 'The zoo will be closed!'
      : [];
    generalSchedule[el.day] = {
      officeHour: el.officeHour,
      exhibition,
    };
  });

  species.forEach((animal) => {
    animal.availability.forEach((day) => {
      generalSchedule[day].exhibition.push(animal.name);
    });
  });

  return generalSchedule;
};

const getSchedule = (scheduleTarget) => {
  const { species } = data;
  const specificAnimal = species.find((element) => element.name === scheduleTarget);

  if (specificAnimal) {
    return specificAnimal.availability;
  }

  const daysOfTheWeek = arrDays.map((el) => el.day);

  if (daysOfTheWeek.includes(scheduleTarget)) {
    const temporaryObj = {};
    temporaryObj[scheduleTarget] = getGeneralSchedule(species)[scheduleTarget];
    return temporaryObj;
  }

  return getGeneralSchedule(species);
};

module.exports = getSchedule;
