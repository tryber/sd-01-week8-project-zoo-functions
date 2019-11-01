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
  
//   function scheduleOfTheDay() {
//     if (hours[dayIndex].open == 0 && hours[dayIndex].close == 0) {
//       hours[dayIndex] = 'CLOSED'
//     }
//     else {
//       hours[dayIndex] = `Open from ${hours[dayIndex].open}am until ${hours[dayIndex].close - 12}pm`
//     }

//   return hours[dayIndex]
// }
  
//   scheduleOfTheDay()

  // console.log (hours[dayIndex]

  // const todaysHours = {
  //   [dayName] : data.hours[dayName]
  // }

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

function animalMap (options) {
  // seu código aqui
};

function animalPopularity (rating) {
  // seu código aqui
};

function animalsByIds (ids) {
  // seu código aqui
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
