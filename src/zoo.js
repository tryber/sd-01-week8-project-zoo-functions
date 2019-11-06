const data = require('./data')



const { prices } = require('./data')
entryCalculator = (entrants = 0) => {
  if (Object.keys(entrants).length === 0) {
    return 0
  }
  else {
    let result = 0
    result += entrants.Adult * prices["Adult"]
    result += entrants.Senior * prices["Senior"]
    result += entrants.Child * prices["Child"]
    return result
  }
}

const { hours } = require('./data')
const open = "Open from"
const until = "until"
const { Tuesday, Wednesday, Thursday, friday, Saturday, Sunday, Monday } = hours
schedule = (dayName = 0) => {
  if (Object.keys(dayName).length === 0) {
    Object.keys(hours).forEach(days => {
      hours[days] = `${open} ${hours[days].open}am ${until} ${hours[days].close - 12}pm`
    });
    hours.Monday = "CLOSED"
    return hours
  }
  else {
    const obj = {}
    obj[dayName] = hours[dayName]
    return obj
  }
};

const { animals } = require('./data')
animalCount = (species = 0) => {
  let obj = {}
  if (Object.keys(species).length === 0) {
    Object.keys(animals).forEach(key => {
      obj[animals[key].name] = animals[key].residents.length
    })
  }
  else {
    obj = animals.find(animal => animal.name == species).residents.length
  }
  return obj
}

function animalMap(options) {
  // seu código aqui
};

animalsByIds = (...ids) => {
  let obj = {}
  if (Object.keys(ids).length === 0) {
    return []
  }
  else {
    obj = ids.map(idPass => animals.find(animal => animal.id == idPass))
  }
  return obj
};

const { employees } = require('./data')
employeeByName = (employeeName = '') => {
  let obj = {}
  if (employeeName.length !== 0) {
    obj = employees.find(empregado => {
      if (empregado.firstName === employeeName || empregado.lastName === employeeName) {
        return empregado
      }
    })
  }
  return obj
};


employeeCoverage = (idOrName = "") => {
  if (idOrName.length === 0) {
  }
};
console.log(employeeCoverage())

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
  constructor(name, age, sex, species) {
    this.name = name
    this.age = age
    this.sex = sex
    this.species = species.slice(0, -1)
  }
  info() {
    const { name, age, sex, species } = this
    return `${name} is a ${age} year old ${sex} ${species}`
  }
  static totalAnimals() {
    return createAnimals().length
  }
}

createAnimals = () => {
  const animals = []
  animals.forEach(animal => (
    animal.residents.forEach(([...animalDefintion]) => (
      animals.push(new Animal(...animalDefintion, animal.name))
    ))
  ))
  return animals
}
console.log(createAnimals())
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
