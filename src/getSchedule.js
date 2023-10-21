const data = require('../data/zoo_data');

const { hours, species } = data;
const arrDays = Object.keys(hours).map((day) => {
  const { open, close } = hours[day];
  if (hours[day].open === 0 && hours[day].close === 0) return { day, officeHour: 'CLOSED' };

  return { day, officeHour: `Open from ${open}am until ${close}pm` };
});

const getGeneralSchedule = () => {
  const generalSchedule = {};

  arrDays.forEach((el) => {
    const exhibition = el.officeHour === 'CLOSED'
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
  const specificAnimal = species.find((element) => element.name === scheduleTarget);

  if (specificAnimal) {
    return specificAnimal.availability;
  }

  const daysOfTheWeek = arrDays.map((el) => el.day);

  if (daysOfTheWeek.includes(scheduleTarget)) {
    const temporaryObj = {};
    temporaryObj[scheduleTarget] = getGeneralSchedule()[scheduleTarget];
    return temporaryObj;
  }

  return getGeneralSchedule();
};

module.exports = getSchedule;
