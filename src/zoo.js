const data = require('./data')

function entryCalculator(entrants = 0) {
  let price = 0
  const { Adult = 0, Child = 0, Senior = 0 } = entrants

  if (Object.keys(entrants).length != 0) {
    price = Adult * data.prices.Adult
    price += Child * data.prices.Child
    price += Senior * data.prices.Senior
  }
  return price
}

function schedule(dayName = 0) {
  const cronograma = data.hours
  if (dayName == 0) {
    Object.keys(cronograma).forEach((key) => {
      cronograma[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close - 12}pm`
    })
    cronograma.Monday = 'CLOSED'
    return cronograma
  } else {
    let obj = {}
    obj[dayName] = cronograma[dayName]
    return obj
  }
}

function animalCount(species = 0) {
  const animals = data.animals
  const obj = {}
  const isSpecie = (animal, species) => animal.name === species
  const filterAnimals = (animals, species) => animals.filter(
    (animal) => isSpecie(animal, species))
  if (species == 0) {
    Object.keys(animals).forEach((key) => {
      obj[data.animals[key].name] = data.animals[key].residents.length
    })
  } else {
    return filterAnimals(data.animals, species)[0].residents.length
  }
  return obj
}

function animalMap(options = 0) {
  const { includeNames, sex, sorted } = options

  const result = data.animals.reduce((obj, animal) => {
    const animalsInLocation = obj[animal.location] || []

    if (!includeNames) {
      obj[animal.location] = [...animalsInLocation, animal.name]
      return obj
    }
    let residents = animal.residents

    if (sex) {
      residents = residents.filter(resident => resident.sex === sex)
    }
    let animalNames = residents.map(({ name }) => name)

    if (sorted) {
      animalNames = animalNames.sort()
    }
    obj[animal.location] = [...animalsInLocation, { [animal.name]: animalNames }]

    return obj
  }, {})
  return result
}

function animalPopularity(rating) {
  // seu código aqui
}

function animalsByIds(...ids) {
  const find = []
  if (ids) {
    ids.map((id) => find.push(data.animals.find(animals => animals.id === id)))
  }
  return find
}

function animalByName(animalName) {
  // seu código aqui
}

function employeesByIds(ids) {
  // seu código aqui
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {}
  } else {
    return data.employees.find(animals => animals.firstName === employeeName || animals.lastName === employeeName)
  }
}

function managersForEmployee(idOrName) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  const employess = data.employees
  const obj = {}
  if (!idOrName) {
    Object.keys(employess).forEach((key) => {
      obj[`${employess[key].firstName} ${employess[key].lastName}`] = data.animals.filter((animal) => {
        for (let i = 0; i < employess[key].responsibleFor.length; i++) {
          if (employess[key].responsibleFor[i] === animal.id) {
            return animal
          }
        }
      }).map(animal => animal.name)
    })
  } else {
    const idEmployess = employess.find(employess => employess.id === idOrName || employess.firstName === idOrName || employess.lastName === idOrName)
    obj[`${idEmployess.firstName} ${idEmployess.lastName}`] = data.animals.filter((animal) => {
      for (let i = 0; i < idEmployess.responsibleFor.length; i++) {
        if (idEmployess.responsibleFor[i] === animal.id) {
          return animal
        }
      }
    }).map(animal => animal.name)
  }
  return obj
}


function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const newArray = []
  newArray.id = id
  newArray.firstName = firstName
  newArray.lastName = lastName
  newArray.managers = managers
  newArray.responsibleFor = responsibleFor
  return data.employees.push(newArray)
}

function isManager(id) {
  return data.employees.some(element => element.managers.some(elem => elem === id))
}

function animalsOlderThan(animal, age) {
  return data.animals.find(animals => animals.name == animal).residents.every(animals => animals.age >= age)
}

function oldestFromFirstSpecies(id) {
  const findFunc = data.employees.find(element => element.id == id)
  const findAnimal = data.animals.find(animal => animal.id == findFunc.responsibleFor[0]).residents.map(resident => resident)
  const arrayAge = findAnimal.map(resident => resident.age)
  const oldestAnimal = Math.max(...arrayAge)
  const array = findAnimal.find(animal => animal.age == oldestAnimal)
  return [array.name, array.sex, array.age]
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((key) => {
    data.prices[key] = Math.round((data.prices[key] + (data.prices[key] * (percentage / 100))) * 100) / 100
  })
  return data.prices
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

  static total_animals() {
    return createAnimals().length
  }
}

function createAnimals() {
  const animals = []
  data.animals.forEach(animal => (
    animal.residents.forEach(({ name, age, sex }) => (
      animals.push(new Animal(name, age, sex, animal.name))
    ))
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
