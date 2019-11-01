const data = require('./data')

function entryCalculator(entrants) {
    if (entrants === undefined || Object.keys(entrants).length === 0) {
        return 0
    }
    return Object.keys(entrants).reduce((acc, key) => {
        return acc + data.prices[key] * entrants[key]
    }, 0)
}

function schedule(dayName) {
    const horarioFunc = Object.assign({}, data.hours)
    Object.keys(horarioFunc).forEach((key) => horarioFunc[key] = `Open from ${parseInt(data.hours[key].open)}am until ${parseInt(data.hours[key].close) - 12}pm`)
    horarioFunc.Monday = "CLOSED"
    if (dayName === undefined || Object.keys(dayName).length === 0) {
        return horarioFunc
    } else {
        return {
            [dayName]: horarioFunc[dayName]
        }
    }
}


// function schedule(dayName = 0) {
//     const cronograma = data.hours;
//     if (dayName == 0) {
//         Object.keys(cronograma).forEach((key) => {
//             cronograma[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close - 12}pm`;
//         })
//         cronograma.Monday = 'CLOSED';
//         return cronograma;
//     } else {
//         let obj = {}
//         obj[dayName] = cronograma[dayName]
//         return obj;
//     }
// }





function animalCount(species) {
    // seu código aqui
};

function animalMap(options) {
    // seu código aqui
};

function animalPopularity(rating) {
    // seu código aqui
};

function animalsByIds(ids) {
    // seu código aqui
};

function animalByName(animalName) {
    // seu código aqui
};

function employeesByIds(ids) {
    // seu código aqui
};

function employeeByName(employeeName) {
    // seu código aqui
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