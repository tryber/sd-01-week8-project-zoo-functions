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
      // let animalObj1 = data.animals.find ( itemId => itemId.id == ids )
      // animalArr.push( animalObj1 )
      // if ( ids[1] !== undefined ) {
      //   let animalObj2 = data.animals.find ( itemId => itemId.id == ids )
      //   animalArr.push( animalObj2 )
        // console.log (ids)

        console.log (animalArr)
        return animalArr
      // return [data.animals.find ( itemId => itemId.id == ids )]
    }
  };

  function animalByName (animalName) {
    // seu código aqui
  };

  function employeesByIds (ids) {
    // seu código aqui
  };

  function employeeByName (employeeName) {
    // seu código aqui
  };

  function managersForEmployee (idOrName) {
    // seu código aqui
  };

  function employeeCoverage (idOrName) {
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
