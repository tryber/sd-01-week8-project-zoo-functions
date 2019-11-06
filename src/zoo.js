const data = require('./data')

function entryCalculator (entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0
  }
  return Object.keys(entrants).reduce((acc, key) => (
    acc + (data.prices[key] * entrants[key])
  ), 0)
}; 

function schedule(dayName = 0) {
  const cronograma = data.hours;
  if (dayName === 0) {
    Object.keys(cronograma).forEach((key) => {
      cronograma[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close - 12}pm`;
    })
    cronograma.Monday = 'CLOSED';
    return cronograma;
  }
  const obj = {}
  obj[dayName] = cronograma[dayName]
  return obj;
}

function animalCount (species) {
  if (species === undefined) {
    const animalsObject = {}
    const animal = data.animals.forEach((actualAnimal) => {
      animalsObject[actualAnimal.name] = actualAnimal.residents.length
    })
    return animalsObject
  }
  return data.animals.find(animal => animal.name === species).residents.length
};

function animalMap (options) {
  // seu código aqui
};

function animalPopularity (rating) {
  // seu código aqui
};

function animalsByIds (...ids) {
  const idsObject = []
  if (ids === undefined) {
    return idsObject
  }
  return ids.map(id => idsObject.push(data.animals.find(actualAnimal => actualAnimal.id === id)))  
};

function animalByName (animalName) {
  // seu código aqui
};

function employeesByIds (ids) {
  // seu código aqui
};

function employeeByName (employeeName) {
  if(employeeName === undefined) {
    return []
  } 
  return data.employees.find(name => name.firstName === employeeName || 
    name.lastName === employeeName)
}

function managersForEmployee (idOrName) {
  // seu código aqui
};

function employeeCoverage (idOrName) {
  const employee = data.employees.reduce((accumuateValues, actualArray) => {
    accumuateValues[`${actualArray.firstName} ${actualArray.lastName}`] = actualArray.responsibleFor.map(id => data.animals.find(animal => animal.id == id).name)
    return accumuateValues
  }, {})  
  if (idOrName === undefined) {
    return employee
  }
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.some(ids => ids === id))
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
  return { ...personalInfo, ...associatedWith }
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
