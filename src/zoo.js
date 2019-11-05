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

const {hours} = require('./data')
const open = "Open from"
const until = "until"
const {Tuesday, Wednesday, Thursday, friday, Saturday, Sunday, Monday} = hours
schedule = (dayName = 0) => {
  if (Object.keys(dayName).length === 0) {
    Object.keys(hours).forEach(days => {
      hours[days] =`${open} ${hours[days].open}am ${until} ${hours[days].close -12}pm`
    });
    hours.Monday =  "CLOSED"
    return hours
  }
  else{
    const obj = {}
    obj[dayName] = hours[dayName]
    return obj
  }
};

function animalCount (species) {
  // seu código aqui
};

function animalMap (options) {
  // seu código aqui
};

function animalsByIds (ids) {
  // seu código aqui
};

function employeeByName (employeeName) {
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
  animalsByIds: animalsByIds,
  employeeByName: employeeByName,
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
