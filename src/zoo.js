const data = require('./data')



const {prices} = require('./data')
entryCalculator = (entrants = 0) => {
  if (Object.keys(entrants).length === 0) {
    return 0
  }
  else{
    let result = 0
    result += entrants.Adult * prices["Adult"]
    result += entrants.Senior * prices["Senior"]
    result += entrants.Child  * prices["Child"]
    return result
  }
}

function schedule (dayName) {
  // seu código aqui
};

function animalCount (species) {
  // seu código aqui
};

function animalMap (options) {
  // seu código aqui
};

// function animalPopularity (rating) {
//   // seu código aqui
// };

function animalsByIds (ids) {
  // seu código aqui
};

// function animalByName (animalName) {
//   // seu código aqui
// };

// function employeesByIds (ids) {
//   // seu código aqui
// };

function employeeByName (employeeName) {
  // seu código aqui
};

// function managersForEmployee (idOrName) {
//   // seu código aqui
// };

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
