const data = require('./data')

function entryCalculator (entrants = 0) {
  if (Object.keys(entrants).length === 0) return 0
  let finalPrice = entrants.Adult * data.prices.Adult;
  finalPrice += entrants.Child * data.prices.Child;
  finalPrice += entrants.Senior * data.prices.Senior;

  return finalPrice;
};

function schedule(dayName) {
  const schedule = {}
  schedule.Monday = "teste"
  Object.keys(data.hours).forEach(key => schedule[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close - 12}pm`)
  schedule.Monday = "CLOSED"
  
  if (dayName == undefined) {
    return schedule
  } else {
    return { [dayName]: schedule[dayName] } 
  }
};

function animalCount(species) {
  const animalSpecies = data.animals.map(species => species.name)
  const animalQuantity = data.animals.map(quantity => quantity.residents.length)
  const count = {}

  for (let index = 0; index < animalSpecies.length; index++) {
    count[animalSpecies[index]] = animalQuantity[index]
  }

  if (species == undefined) {
    return count
  } else {
    return count[species]
  }
};

function animalMap(options) {
  const obj = {}
  const locations = [...new Set(data.animals.map(species => species.location))]
  locations.forEach(location => obj[location] = data.animals.filter(animal => animal.location == location).map(species => species.name))

  if (options == undefined) {
    return obj
  }
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
