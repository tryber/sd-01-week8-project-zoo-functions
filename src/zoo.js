const data = require('./data')

function entryCalculator(entrants = 0) {
  let price = 0

  if (Object.keys(entrants).length === 0) {
    price = 0
  } else {
    price = entrants.Adult * data.prices.Adult
    price += entrants.Child * data.prices.Child
    price += entrants.Senior * data.prices.Senior
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
  const animals = data.animals, obj = {}
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
  const animals = data.animals, obj = {}
  const isLocation = (animal, location) => animal.location === location
  const filterAnimals = (animals, location) => animals.filter(
    (animal) => isLocation(animal, location))
  const locations = [...new Set(animals.map(animal => animal.location))]
  if (options == 0) {
    locations.forEach((item) => {
      obj[item] = filterAnimals(animals, item).map((item) => item.name)
    })
    return obj
  } else if (options.includeNames == true) {
    if (options.sorted == true) {

    } else if (options.sex) {

    } else {
      locations.forEach((item) => {
        obj[item] = filterAnimals(animals, item).map((item) => item.residents)
        // .map((item) => item.residents)
      })
    }
  } else {
    return 'lions'
  }
  console.log(obj)
}

function animalPopularity(rating) {
  // seu código aqui
}

function animalsByIds(...ids) {
  const animals = data.animals
  const find = []
  if (!ids) {
    return find
  } else {
    for (let i = 0; i < ids.length; i++) {
      find.push(animals.find(animals => animals.id === ids[i]))
    }
    return find
  }
}

function animalByName(animalName) {
  // seu código aqui
}

function employeesByIds(ids) {
  // seu código aqui
}

function employeeByName(employeeName) {
  const animals = data.employees
  if (!employeeName) {
    return {}
  } else {
    const find = animals.find(animals => animals.firstName === employeeName || animals.lastName === employeeName)
    return find
  }

}

function managersForEmployee(idOrName) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  const func = data.employees
  const animals = data.animals
  const obj = {}
  if (!idOrName) {
    Object.keys(func).forEach((key) => {
      obj[func[key].firstName + ' ' + func[key].lastName] = animals.filter((animal) => {
        for (let i = 0; i < func[key].responsibleFor.length; i++) {
          if (func[key].responsibleFor[i] === animal.id) {
            return animal
          }
        }
      }).map(animal => animal.name)
    })
  } else {
    const idFunc = func.find(func => func.id === idOrName || func.firstName === idOrName || func.lastName === idOrName)
    obj[idFunc.firstName + ' ' + idFunc.lastName] = animals.filter((animal) => {
      for (let i = 0; i < idFunc.responsibleFor.length; i++) {
        if (idFunc.responsibleFor[i] === animal.id) {
          return animal
        }
      }
    }).map(animal => animal.name)
  }
  return obj
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function isManager(id) {
  const func = data.employees
  return func.some(element => element.managers.some(elem => elem === id))
}

function animalsOlderThan(animal, age) {
  const animals = data.animals
  const findAnimal = animals.find(animals => animals.name == animal)
  return findAnimal.residents.every(animals => animals.age >= age)
}

function oldestFromFirstSpecies(id) {
  const findFunc = data.employees.find(element => element.id == id)
  const findAnimal = data.animals.find(animal => animal.id == findFunc.responsibleFor[0]).residents.map(resident => resident)
  const oldestAnimal = findAnimal.map(resident => resident.age)
  const oldestAnimal2 = Math.max(...oldestAnimal)
  const array = findAnimal.find(animal => animal.age == oldestAnimal2)
  return [array.name, array.sex, array.age]
  
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
