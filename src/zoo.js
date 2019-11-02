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

function animalMap(options) {
  const animals = data.animals
  const isSpecie = (animal, species) => animal.name === species
  const filterAnimals = (animals, species) => animals.filter(
    (animal) => isSpecie(animal, species))
  const locations = [...new Set(animals.map(select => select.location))]
  const obj = {}
  // let newAnimal = Object.values(animals)
  // for (const location of locations) {
  //   mapAnimals[location] = animals.filter((animals) => {
  //     if(animals.location == location){
  //     for(let i = 0; i < newAnimal.length; i++){
  //       return newAnimal[i].name
  //     }
  //   }
  //   })
  // }
  locations.forEach((item) => {
    obj[item] = filterAnimals(animals,item).map((item)=>item.name)
  })

  console.log(obj)
}
animalMap()

function animalPopularity(rating) {
  // seu código aqui
}

function animalsByIds(ids) {
  // seu código aqui
}

function animalByName(animalName) {
  // seu código aqui
}

function employeesByIds(ids) {
  // seu código aqui
}

function employeeByName(employeeName) {
  // seu código aqui
}

function managersForEmployee(idOrName) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

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
