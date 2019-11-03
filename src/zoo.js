const data = require('./data');
const logic = require('./logic')

const animals = data.animals; // [{id }]


// data: {4*{ key : x }} // x data depth variation
console.log()

// data.animals: [4*{key:value}{key:[3*{key:value}]}]

// key.forEach((element) => createObject(objectZoo, element, value))

const zooDates = new Object;
const key_section_1 = logic.getKeyName(data);
key_section_1.forEach((element) => logic.createObject(zooDates, element, "test"))
console.log(zooDates)
    // logic.getKeyName(data.animals[0]).forEach((element) => console.log(logic.arraySerchObjectElement(element, ...data.animals)))

// logic.getKeyName(data.animals[0].residents[0])).forEach((element) => console.log(logic.arraySerchObjectElement(element, ...data.animals))))

// making a object



// Function made for build the code (EFI)
function displayArray(properties_argument) {

}




function entryCalculator(entrants) {
    // seu código aqui
};

function schedule(dayName) {
    // seu código aqui
}

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