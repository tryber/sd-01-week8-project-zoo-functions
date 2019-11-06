const data = require('./data')

function entryCalculator (entrants = 0) {
  if (Object.keys(entrants).length === 0) return 0
  let finalPrice = entrants.Adult * data.prices.Adult;
  finalPrice += entrants.Child * data.prices.Child;
  finalPrice += entrants.Senior * data.prices.Senior;

  return finalPrice;
};

function schedule(dayName) {
  const fullSchedule = {}
  fullSchedule.Monday = 'teste'
  Object.keys(data.hours).forEach((key) => {
    fullSchedule[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close - 12}pm`
  })
  fullSchedule.Monday = 'CLOSED'

  if (dayName === undefined) {
    return fullSchedule
  }
  return { [dayName]: fullSchedule[dayName] }
};

function animalCount(species) {
  const animalSpecies = data.animals.map(specie => specie.name)
  const animalQuantity = data.animals.map(quantity => quantity.residents.length)
  const count = {}

  for (let index = 0; index < animalSpecies.length; index += 1) {
    count[animalSpecies[index]] = animalQuantity[index]
  }

  if (species === undefined) {
    return count
  }
  return count[species]
};

function animalMap(options = {}) {
  const { includeNames, sex, sorted } = options
  const obj = {}
  const locations = [...new Set(data.animals.map(species => species.location))]
  locations.forEach((location) => {
    if (!includeNames) {
      obj[location] = data.animals
        .filter(animal => animal.location === location)
        .map(species => species.name)
      return obj
    }

    obj[location] = data.animals
      .filter(animal => animal.location === location)
      .map((species) => {
        let residents = species.residents
        if (sex) residents = residents.filter(resident => resident.sex === sex)
        let animalNames = residents.map(({ name }) => name)
        if (sorted) animalNames = animalNames.sort()
        return { [species.name]: animalNames }
      })
    return true;
  })
  return obj
};

function animalPopularity (rating) {
  // seu código aqui
};

function animalsByIds (...ids) {
  if (ids.length === 0) return ids
  const obj = []
  ids.forEach(id => obj.push(data.animals.find(animal => animal.id === id)))
  return obj
};

function animalByName (animalName) {
  // seu código aqui
};

function employeesByIds (ids) {
  // seu código aqui
};

function employeeByName (employeeName) {
  if (employeeName === undefined) return {}
  return data.employees.find(employee => employee.firstName === employeeName
    || employee.lastName === employeeName)
};

function managersForEmployee (idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  const obj = []
  data.employees.forEach((employee) => {
    obj[`${employee.firstName} ${employee.lastName}`] =
      employee.responsibleFor.map(id => data.animals.find(animal => animal.id === id).name)
  })

  const searchEmployee = (condition) => {
    const employeeDetails = data.employees.find(employee => employee.firstName === condition
      || employee.lastName === condition
      || employee.id === condition)
    return `${employeeDetails.firstName} ${employeeDetails.lastName}`
  }

  if (idOrName === undefined) return obj
  return { [searchEmployee(idOrName)]: obj[searchEmployee(idOrName)] }
};

function addEmployee(...info) {
  const allEmployees = [...data.employees]
  const newEmployees = ([id, firstName, lastName, managers = [], responsibleFor = []]) =>
  ({ id, firstName, lastName, managers, responsibleFor })

  data.employees = [...allEmployees, newEmployees(info)]
}

function isManager(id) {
  return data.employees.some(employee => employee.managers.includes(id))
}

function animalsOlderThan(animal, age) {
  const specie = data.animals.find(({ name }) => name === animal)
  return specie.residents.every(resident => resident.age > age)
}

function oldestFromFirstSpecies(id) {
  const firstSpecie = data.employees.find(employee => employee.id === id).responsibleFor[0]
  const animals = data.animals.find(animal => animal.id === firstSpecie).residents
  let oldestAge = 0
  let oldestName = ''
  let oldestSex = ''
  animals.forEach((animal) => {
    if (animal.age > oldestAge) {
      oldestAge = animal.age
      oldestName = animal.name
      oldestSex = animal.sex
    }
  })
  return [oldestName, oldestSex, oldestAge]
}

function increasePrices(percentage) {
  let prices = data.prices
  prices.Adult = Math.round((prices.Adult + (prices.Adult * percentage / 100)) * 100) / 100
  prices.Child = Math.round((prices.Child + (prices.Child * percentage / 100)) * 100) / 100
  prices.Senior = Math.round((prices.Senior + (prices.Senior * percentage / 100)) * 100) / 100
  
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
    return data.animals.reduce((acc, el) => acc + el.residents.length, 0)
  }
}

function createAnimals() {
  const animals = []
  data.animals.forEach(animal => animal.residents.forEach(({ name, age, sex }) =>
    animals.push(new Animal(name, age, sex, animal.name))
  ))
  return animals
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
