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

  for (let index = 0; index < animalSpecies.length; index++) {
    count[animalSpecies[index]] = animalQuantity[index]
  }

  if (species === undefined) {
    return count
  } else {
    return count[species]
  }
};

function animalMap(options = {}) {
  const { includeNames, sex, sorted } = options
  const obj = {}
  const locations = [...new Set(data.animals.map(species => species.location))]
  locations.forEach(location => {
    if (!includeNames) {
      obj[location] = data.animals
        .filter(animal => animal.location === location)
        .map(species => species.name)
      return obj
    }

    obj[location] = data.animals
      .filter(animal => animal.location === location)
      .map(species => {
        let residents = species.residents
        if (sex) {
          residents = residents.filter(resident => resident.sex === sex)
        }
        let animalNames = residents.map(({ name }) => name)
        if (sorted) {
          animalNames = animalNames.sort()
        }
        return { [species.name]: animalNames }
      })
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
  return data.employees.find(employee => employee.firstName === employeeName || employee.lastName === employeeName)
};

function managersForEmployee (idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  const obj = []
  data.employees.forEach(employee => {
    obj[`${employee.firstName} ${employee.lastName}`] =
      employee.responsibleFor.map(id => data.animals.find(animal => animal.id === id).name)
  })

  const searchEmployee = (idOrName) => {
    let employeeDetails = data.employees.find(employee => employee.firstName === idOrName
      || employee.lastName === idOrName
      || employee.id === idOrName)
    return `${employeeDetails.firstName} ${employeeDetails.lastName}`
  }

  if (idOrName === undefined) {
    return obj
  }
  else {
    return { [searchEmployee(idOrName)]: obj[searchEmployee(idOrName)] }
  }
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
  return {...personalInfo, ...associatedWith}
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
