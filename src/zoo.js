const data = require('./data')

function entryCalculator(entrants = 0) {
  if (Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, key) => (acc + (data.prices[key] * entrants[key])), 0)
};

function schedule(dayName = 0) {
  const cronograma = Object.assign({}, data.hours)
  let obj = {}
  Object.keys(cronograma).forEach((key) => {
    cronograma[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close - 12}pm`;
  })
  cronograma.Monday = 'CLOSED';

  if (dayName === 0) {
    obj = cronograma;
  } else {
    obj[dayName] = cronograma[dayName]
  }
  return obj
}

function animalCount(species = 0) {
  const animals = data.animals;
  const obj = {}
  let num;
  const isSpecie = ({ name }) => name === species
  const filterAnimals = objAnimals =>
    objAnimals.filter(animal => isSpecie(animal))
  if (species === 0) {
    Object.keys(animals).forEach(key => (
      obj[data.animals[key].name] = data.animals[key].residents.length)
    )
  } else {
    num = filterAnimals(data.animals)[0].residents.length
  }
  return num || obj
}

function animalsFilteredBySex(animals, sex) {
  if (!sex) return animals
  return animals.filter(({ sex: animalSex }) => sex === animalSex)
}

function sortedAnimalNames(animalNames, sorted) {
  if (!sorted) return animalNames
  return animalNames.sort()
}

function animalMap(options = {}) {
  const { includeNames, sex, sorted } = options
  return data.animals.reduce((obj, animal) => {
    const animalsInLocation = obj[animal.location] || []

    if (!includeNames) {
      obj[animal.location] = [...animalsInLocation, animal.name]
      return obj
    }

    let animals = animal.residents
    animals = animalsFilteredBySex(animals, sex)
    let animalNames = animals.map(({ name }) => name)
    animalNames = sortedAnimalNames(animalNames, sorted)
    obj[animal.location] = [...animalsInLocation, { [animal.name]: animalNames }]
    return obj
  }, {})
};


function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...values) {
  const obj = [];
  values.forEach(item => obj.push(data.animals.find(animal => animal.id === item)));
  return obj;
};

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(employeeName) {
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName) || {}
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(idOrName) {
  const obj = {}
  const allIddata = data.employees.map(item => item.id);
  const returnIdResponsibleForById = idEmployee => (
    data.employees.find(employee => employee.id === idEmployee))
  const funcGetResult = id => (
    obj[`${returnIdResponsibleForById(id).firstName} ${returnIdResponsibleForById(id).lastName}`] =
      returnIdResponsibleForById(id).responsibleFor.map(idAnimal =>
        data.animals.find(animal => animal.id === idAnimal).name)
  )
  if (idOrName === undefined) {
    allIddata.forEach(id => funcGetResult(id));
  } else {
    let value = {};
    value = data.employees.find(item => item.firstName === idOrName || item.lastName === idOrName || item.id === idOrName)
    funcGetResult(value.id)
  }
  return obj;
};

function addEmployee(...arg) {
  const allEmployees = [...data.employees]
  const newEmployees = ([id, firstName, lastName, managers = [], responsibleFor = []]) =>
    ({ id, firstName, lastName, managers, responsibleFor })
  data.employees = [...allEmployees, newEmployees(arg)]
}


function isManager(valueId) {
  return data.employees.some(({ managers }) =>
    managers.some(ids => ids === valueId))
}

function animalsOlderThan(animal, valueAge) {
  return data.animals.find(({ name }) => name === animal)
    .residents.every(({ age }) => age >= valueAge)
}

function oldestFromFirstSpecies(id) {
  const employee = employeeCoverage(id)
  const specie = Object.values(employee)[0][0]

  const obj = Object.values(data.animals.find((animal) => animal.name === specie)
    .residents.reduce((previus, currentValue) => {
      if (previus.age < currentValue.age) {
        previus = currentValue
      }
      return previus
    }))
  return obj;
}

function increasePrices(percentage) {
  const calculate = (perc, value) => {
    const result = value + ((value / 100) * perc)
    return result;
  }
  Object.keys(data.prices).forEach(type =>
    data.prices[type] = Math.round(calculate(percentage, data.prices[type]) * 100) / 100)
}

class Animal {
  constructor(name, sex, age, species) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.species = species.slice(0, -1);
  }

  info() {
    const { name, age, sex, species } = this
    return `${name} is a ${age} year old ${sex} ${species}`
  }

  static totalAnimals() {
    return data.animals.reduce((acc, specie) => acc + specie.residents.length, 0)
  }
}

function createAnimals() {
  const animalObject = []
  data.animals.forEach(specie => (
    specie.residents.forEach((animal) => (animalObject
      .push(new Animal(...Object.values(animal), specie.name))))
  ))
  return animalObject;
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
