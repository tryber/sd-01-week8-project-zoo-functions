  const data = require('./data')

  //default params:
  function entryCalculator (entrants = 0){
    if ( Object.keys(entrants).length === 0) {
      return 0
    }

    return Object.keys(entrants).reduce( ( total, entrant )  => {
      return total + (data.prices[entrant] * entrants[entrant])
    }, 0)
    
  
  };

  function schedule (dayName) {
    const hours = data.hours
    const hourKeys = Object.keys(data.hours)
    let dayIndex = hourKeys.indexOf(dayName)
    
    function dailySchedule () {
        for (let key of hourKeys) {
        if (hours[key].open == 0 && hours[key].close == 0) {
          hours[key] = 'CLOSED'
        }
        else {
          hours[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`
        }
      }
    }

    if (dayName == undefined) {
      dailySchedule();
      return data.hours
    }
    

    return {[dayName] : data.hours[dayName]}


  };

  function animalCount (species) {
  // seu código aqui
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
  // seu código aqui
  let animalObj = {}

  if (Object.keys(options).length === 0 ) {
    function filterAnimals (region) {
      const animalsRegion = data.animals.filter (animal => animal.location == region)
      let regionalAnimals = []
      for (let animal of animalsRegion) {
        regionalAnimals.push(animal.name)
      }
      animalObj[region] = regionalAnimals
      return animalObj
    }
    
        filterAnimals("NE")
        filterAnimals("NW")
        filterAnimals("SE")
        filterAnimals("SW")
    
        return animalObj
      }
  
  function optionSort(param) {
      param.sort()
  
  }

  function filterAnimalsResidents (region) {
    let animalsRegion = data.animals.filter (beast => beast.location == region)
    let residentAnimals = []
    let animalsObjArray = []
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
    
  let animalGroupings = {[region] : animalsObjArray}
  return animalGroupings
}

function returnObject() {
  const animalsNE = filterAnimalsResidents("NE")
  const animalsNW = filterAnimalsResidents("NW")
  const animalsSE = filterAnimalsResidents("SE")
  const animalsSW = filterAnimalsResidents("SW")

  const animalGroupings = Object.assign({}, animalsNE, animalsNW, animalsSE, animalsSW)
  return animalGroupings
}


if (options.hasOwnProperty('includeNames') === true) {

    return returnObject()

  }

  else {

    const animalGroupings = returnObject()
    for (let key in animalGroupings) {
      for (let animal of animalGroupings[key]) {
        return { [key] : Object.keys(animal) }

      }
    }
  }

}
    

  function animalPopularity (rating) {
    // seu código aqui
  };


  function animalsByIds (...ids) {
    if ( ids[0] == undefined  ) {
      // console.log("[]")
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

  function animalByName (animalName) {
    // seu código aqui
  };

  function employeesByIds (ids) {
    // seu código aqui
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

  function managersForEmployee (idOrName) {
    // seu código aqui
  };

  function employeeCoverage (idOrName = "") {

    const employees = data.employees

    if (idOrName == "") {
      let fullName
      let animalArr = []
      const coverageList = {}
      let animalIds
      for (let employee of employees) {
        fullName = `${employee.firstName} ${employee.lastName}`
        animalIds = employee.responsibleFor
        for (let id of animalIds) {
          animalArr.push (data.animals.find( item => item.id == id).name )
        }
        coverageList[fullName] = animalArr 
        animalArr = []
      }
      return coverageList
    }
    else {
      const employeeObj = employees.find (employee => employee.id == idOrName || employee.firstName == idOrName || employee.lastName == idOrName )
      let fullName = `${employeeObj.firstName} ${employeeObj.lastName}`
      let animalArr = []
      let idedAnimal
      const animalIds = employeeObj.responsibleFor
      for (let id of animalIds) {
        idedAnimal = data.animals.find( item => item.id == id)
        animalArr.push(idedAnimal.name)
      }
      
      const employeeCoverage = {
        [fullName] : animalArr
      }
      

      return employeeCoverage
    }
  };

  function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
    let newEmployee = { id : id,
      firstName: firstName,
      lastName: lastName,
      managers: managers,
      responsibleFor: responsibleFor }
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
      }
    }
   
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

    static total_animals() {
      return Animal.numInstances
    }
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

  function createEmployee(personalInfo, associatedWith) {
    return Object.assign({}, personalInfo, associatedWith)
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
