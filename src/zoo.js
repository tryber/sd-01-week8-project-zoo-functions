const data = require('./data')

function entryCalculator (entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0
  }
  return Object.keys(entrants).reduce((acc, key) => {
    return acc + (data.prices[key] * entrants[key]);
  }, 0)
  
};

function schedule (dayName) {
  const schedule = data.hours
  if (dayName == undefined) {
  Object.keys(schedule).forEach((key) => schedule[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close - 12}pm`)
  schedule.Monday = "CLOSED"
    return schedule
  } else {
    let obj = {}
    obj[dayName] = schedule[dayName]
    return obj
  }
};

function animalCount (species) {
  if(species == null) {
    let animalObj = {}
    const animais = data.animals.forEach(posicaoAnimal => {
      animalObj[posicaoAnimal.name] = posicaoAnimal.residents.length
    })
    return animalObj
  }
    return data.animals.find(beast => beast.name == species).residents.length 
};


function animalMap (options = {}) {
  const { includeNames } = options
  const obj = {}
  const locations = [...new Set(data.animals.map(species => species.location))]
  locations.forEach(location => obj[location] = data.animals
    .filter(animal => animal.location == location)
    .map(species => species.name))
  if (options == undefined) {
    return obj
  } 
};

function animalPopularity (rating) { //nao tem
  // seu código aqui
};

function animalsByIds (ids) {
  if(ids == undefined) {
    return ids = []
  }
  else {
    return [data.animals.find(numberId => numberId.id == ids)]
  }
};
//let find = []
  // if(ids){
  //   return find
  // }
  
  // find.push(data.animals.find((animal) => animal.id == ids))

function animalByName (animalName) { //nao tem
  // seu código aqui
};

function employeesByIds (ids) { //nao tem
  // seu código aqui
};

function employeeByName (employeeName) {
  if (employeeName == undefined) {
    return employeeName = {}
  } 
  else {
    const firstNam = data.employees.find(nameFirst => nameFirst.firstName == employeeName || nameFirst.lastName == employeeName)
    return firstNam
  }
  
};

function managersForEmployee (idOrName) { //nao tem
  // seu código aqui
};

function employeeCoverage (idOrName) {

};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function isManager(id) {
  // let manager = false;
  // if (manager = data.employees.((gerente) => gerente.managers == id)) {
  // return manager
  // }
  // else {
  //   return false
  // }
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
      return data.animals.reduce((count, animal) => count + animal.residents.length, 0)
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
  const { id, firstName, lastName } = personalInfo        
  const {managers, responsibleFor } = associatedWith
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  }
}
// return {...personalInfo, ...associatedwidth} 

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
