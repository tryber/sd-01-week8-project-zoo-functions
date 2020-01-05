const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length == 0) {
    return 0
  }
  return Object.keys(entrants).reduce((acc, key) => {
    return acc + data.prices[key] * entrants[key];
  }, 0)
};

function schedule(dayName) {
  const schedule = data.hours
  if (dayName == undefined) {
    Object.keys(schedule).forEach((key) => schedule[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close - 12}pm`)
    schedule.Monday = "CLOSED"
    return schedule
  } else {
    let day = {}
    day[dayName] = schedule[dayName]
    return day
  }
};

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

function animalMap(options = {}) {
  const { includeNames, sex, sorted } = options
  const obj = {}
  const locations = [...new Set(data.animals.map(species => species.location))]
  locations.forEach(location => {
    if (!includeNames) {
      obj[location] = data.animals
        .filter(animal => animal.location == location)
        .map(species => species.name)
      return obj
    }
    obj[location] = data.animals
      .filter(animal => animal.location == location)
      .map(species => {
        let residents = species.residents
        if (sex) {
          residents = residents.filter(resident => resident.sex === sex)
        }
        let animalNames = residents.map(resident => resident.name)
        if (sorted) {
          animalNames = animalNames.sort()
        }
        return { [species.name]: animalNames }
      })
  }
  )
  return obj
}

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  const arrayIdsAnimals = []
  if (ids == 0) {
    return []
  } else {
    for (let id of ids) {
      const animalsArray = data.animals
      const idAnimals = animalsArray.find(animal => animal.id == id)
      arrayIdsAnimals.push(idAnimals)
    }
    return arrayIdsAnimals
  }
};

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {}
  }
  let firstOrLastName = data.employees.find((employee) => {
    if (employee.firstName === employeeName) {
      return employee
    } else if (employee.lastName === employeeName) {
      return employee
    }
  });
  return firstOrLastName
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
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
  constructor(name, age, sex, species) {
    this.name = name
    this.age = age
    this.sex = sex
    this.species = species
  }
}

function createAnimals() {
  const animals = []
  data.animals.forEach(animal => (
    animal.residents.forEach(resident => (
      animals.push(new Animal())
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
