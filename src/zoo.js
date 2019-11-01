const data = require('./data')

const entrant = {
  Senior: 3,
  Children: 5,
  Adults: 4
}

entryCalculator = (entrants) => {
  const senior = entrant.find((entrant) => { entrant.toLowerCase() == 'senior'})
  return senior
};
console.log(entryCalculator())


function schedule (dayName) {
  // seu código aqui
};

function animalCount (species) {
  // seu código aqui
};

function animalMap (options) {
  // seu código aqui
};

function animalPopularity (rating) {
  // seu código aqui
};

function animalsByIds (ids) {
  // seu código aqui
};

function animalByName (animalName) {
  // seu código aqui
};

function employeesByIds (ids) {
  // seu código aqui
};

function employeeByName (employeeName) {
  // seu código aqui
};

function managersForEmployee (idOrName) {
  // seu código aqui
};

function employeeCoverage (idOrName) {
  // seu código aqui
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

class Animal {
  // seu código aqui
}

function createAnimals() {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage,
  addEmployee: addEmployee,
  isManager: isManager,
  animalsOlderThan: animalsOlderThan,
  oldestFromFirstSpecies: oldestFromFirstSpecies,
  increasePrices: increasePrices,
  createAnimals: createAnimals,
  Animal: Animal,
  createEmployee: createEmployee
}
