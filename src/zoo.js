const data = require('./data')

function entryCalculator (entrants = 0) {
  if (Object.keys(entrants).length === 0) {
    return 0
  }
  return Object.keys(entrants).reduce((total, entrant) => {
    return total + (data.prices[entrant] * entrants[entrant])
  }, 0)
};

function schedule (dayName) {
  const hours = data.hours
  const hourKeys = Object.keys(data.hours)
  if (dayName === undefined) {
    for (let key of hourKeys) {
      if (hours[key].open == 0 && hours[key].close == 0) {
        hours[key] = 'CLOSED'
      }
      else {
        hours[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`
      }
    }
    return data.hours
  } else {
  return {[dayName] : data.hours[dayName]}
  }
};

function animalCount (species) {
  if (species == undefined) {
      const animals = data.animals
      let animalsObject = {}
      for (let animal of animals) {
        animalsObject[animal.name] = animal.residents.length  
      }
      return animalsObject
    }
    return data.animals.find( animal => animal.name == species).residents.length
};

function animalMap (options = {}) {
  const { sex = false, sorted = false } = options
  if (Object.keys(options).length === 0 ) {
    let animalObj = {}
    filterAnimals("NE", animalObj)
    filterAnimals("NW", animalObj)
    filterAnimals("SE", animalObj)
    filterAnimals("SW", animalObj)
    return animalObj
  }
  function returnObject() {
    const animals = [ filterAnimalsResidents("NE", options), filterAnimalsResidents("NW", options), 
    filterAnimalsResidents("SE", options), filterAnimalsResidents("SW", options)]
    const [animalsNE, animalsNW, animalsSE, animalsSW] = animals
    const animalGroupings = Object.assign({}, animalsNE, animalsNW, animalsSE, animalsSW)
    return animalGroupings
    }
    if (options.hasOwnProperty('includeNames') === true) {
      return returnObject()
    }
    const animalGroupings = returnObject()
    for (let key in animalGroupings) {
      for (let animal of animalGroupings[key]) {
        return { [key] : Object.keys(animal) }
      }}
}

function filterAnimals (region, object) {
  const animalsRegion = data.animals.filter (animal => animal.location == region)
  let regionalAnimals = animalsRegion.reduce ((arr, animal) => {
    arr.push(animal.name)
    object[region] = arr
    return arr
  },[])
  return regionalAnimals
}

function filterAnimalsResidents (region, options) {
  const animalsRegion = data.animals.filter (beast => beast.location == region),
    animalsObjArray = []
  let residentAnimals = []
  for (let animal of animalsRegion) {
    let animalResidents = animal.residents
    if (options.hasOwnProperty('sex') === true) {
      animalResidents = animal.residents.filter ( item => item.sex === options.sex)
    }
    for (let residents of animalResidents) {
      residentAnimals.push(residents.name)
    }
    if (options.hasOwnProperty('sorted') === true) {
      optionSort(residentAnimals)
    }
    let regionalAnimalsNames = {[animal.name] : residentAnimals}
    animalsObjArray.push(regionalAnimalsNames)
    regionalAnimalsNames = []
    residentAnimals = []
  }
  return  {[region] : animalsObjArray}
}

function optionSort(param) {
  param.sort()
}

function animalsByIds (...ids) {
  if ( ids[0] == undefined  ) {
    return ids
  }
  else {
    let animalArr = []
    for (let id of ids) {
      animalArr.push (data.animals.find( item => item.id == id) )
    }
      return animalArr
  }
};

function employeeByName (employeeName = 0) {
  if (employeeName == 0) {
    return {}
  }
  else {
    const employees = data.employees
    return employees.find( property => property.firstName == employeeName || property.lastName == employeeName )
  }
};

function employeeCoverage (idOrName = "") {
  const employees = data.employees,  coverageList = {}
  let fullName, animalIds, animalArr = []
  function getAnimalsArray(ids) {
    for (let id of ids) {
      animalArr.push (data.animals.find( item => item.id == id).name )
    }
  }
  if (idOrName == "") {
    for (let employee of employees) {
      fullName = `${employee.firstName} ${employee.lastName}`
      animalIds = employee.responsibleFor
      getAnimalsArray(animalIds)
      coverageList[fullName] = animalArr 
      animalArr = []
    }
    return coverageList
  }
  else {
    const employeeObj = employees.find (employee => employee.id == idOrName || employee.firstName == idOrName || employee.lastName == idOrName )
    const animalIds = employeeObj.responsibleFor
    getAnimalsArray(animalIds)
    return { [`${employeeObj.firstName} ${employeeObj.lastName}`] : animalArr }
  }
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  let newEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor}
  data.employees.push(newEmployee)
}

function isManager(id) {
  const managerArray = data.employees.map( property => property.managers)
  for (const arrays of managerArray) {
    if (arrays.indexOf(id) === -1) {
      return false
    }
    else {
      return true
    }}
}

function animalsOlderThan(animal, age) {
  const selectedAnimal = data.animals.find( animals => animals.name == animal )
  if (selectedAnimal.residents.every( resident => resident.age >= age)) {
    return true
  }
  else {
    return false
  }
}

function oldestFromFirstSpecies(id) {
  const employeeObj = data.employees.find (employee => employee.id == id)
  const firstSpecieId = employeeObj.responsibleFor[0]
  const animalObj = data.animals.find ( animal => animal.id == firstSpecieId)
  const ageArray = animalObj.residents.map (element => element.age)
  const oldestAnimal = animalObj.residents[ ageArray.indexOf(Math.max(...ageArray)) ]
  const oldestAnimalArray = [ oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age ]
  return oldestAnimalArray
}

function increasePrices(percentage) {
  let prices = data.prices
  function roundTo(n, digits) {
    if (digits === undefined) {
      digits = 0;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    var test =(Math.round(n) / multiplicator);
    return +(test.toFixed(digits));
  }
  for (const key in prices) {
    prices[key] = ( prices[key] * (100+percentage) / 100 )
    prices[key] = roundTo(prices[key], 2)
  }
  return data.prices
}

class Animal {
  constructor ( name, age, sex, species){
    this.name = name
    this.age = age
    this.sex = sex
    this.species = species.slice(0, -1)
    Animal.numInstances = (Animal.numInstances || 0) + 1;
  }

  info() {
    const { name, age, sex, species } = this
    return(`${name} is a ${age} year old ${sex} ${species}`)
  }

  static total_animals() { return Animal.numInstances }
}

function createAnimals() {
  const animals = data.animals.reduce((arr, animal) => {
    animal.residents.map(( {name, age, sex} ) => {
      const newAnimal = new Animal(name, age, sex, animal.name) 
      arr.push(newAnimal)
    })
    return arr
  },[])  
  return animals
}

const createEmployee = (personalInfo, associatedWith) => Object.assign({}, personalInfo, associatedWith)

module.exports = {  entryCalculator: entryCalculator,   schedule: schedule,
  animalCount: animalCount,  animalMap: animalMap,   animalsByIds: animalsByIds,
  employeeByName: employeeByName,  employeeCoverage: employeeCoverage,
  addEmployee: addEmployee,  isManager: isManager,   animalsOlderThan: animalsOlderThan,
  oldestFromFirstSpecies: oldestFromFirstSpecies,  increasePrices: increasePrices,
  createAnimals: createAnimals,  Animal: Animal,  createEmployee: createEmployee
}
