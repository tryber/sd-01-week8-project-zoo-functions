const data = require('./data');
const logic = require('./logic')


function bigDates(name) {
    switch (name) {
        case "key_layer_1":
            return logic.getKeyName(data);
        case "key_layer_2_animals":
            return logic.getKeyName(data.animals[0]);
        case "key_layer_3_animals":
            return logic.getKeyName(data.animals[0].residents[0]);
        case "key_layer_2_employees":
            return logic.getKeyName(data.employees[0]);
        case "key_layer_2_hours":
            return logic.getKeyName(data.hours);
        case "key_layer_3_hours_dayName":
            return logic.getKeyName(data.hours.Thursday);
        case "key_later_2_prices":
            return logic.getKeyName(data.prices);
        case "animals_id_value":
            return logic.displayValues(data.animals, "id");
        case "animals_name_value":
            return logic.displayValues(data.animals, "name");
        case "animals_popularity_value":
            return logic.displayValues(data.animals, "popularity");
        case "animals_location_value":
            return logic.displayValues(data.animals, "location");
        case "animals_residents_value":
            return logic.displayValues(data.animals, "residents");
        case "animals_residents_name_value":
            return logic.displayValues(data.animals, "residents").map((elm) => logic.displayValues(elm, "name"));
        case "animals_residents_sex_value":
            return logic.displayValues(data.animals, "residents").map((elm) => logic.displayValues(elm, "sex"));
        case "animals_residents_age_value":
            return logic.displayValues(data.animals, "residents").map((elm) => logic.displayValues(elm, "age"));
        case "employees_id_value":
            return logic.displayValues(data.employees, "id");
        case "employees_firstName_value":
            return logic.displayValues(data.employees, "firstName");
        case "employees_lastName_value":
            return logic.displayValues(data.employees, "lastName");
        case "employees_managers_value":
            return logic.displayValues(data.employees, "managers");
        case "employees_responsibleFor_value":
            return logic.displayValues(data.employees, "responsibleFor");
        case "hours_open_value":
            return bigDates("key_layer_2_hours").map((elm) => data.hours[elm].open);
        case "hours_close_value":
            return bigDates("key_layer_2_hours").map((elm) => data.hours[elm].close);
        case "prices_value":
            return bigDates("key_later_2_prices").map((elm) => data.prices[elm]);
        default:
            console.log(`List of Valid Search: 
            "key_layer_1"; "key_layer_2_animals"; "key_layer_3_animals";
            "key_layer_2_employees"; "key_layer_2_hours"; "key_layer_3_hours_dayName";
            "key_later_2_prices"; "animals_id_value"; "animals_name_value";
            "animals_popularity_value"; "animals_location_value"; "animals_residents_name_value";
            "animals_residents_sex_value"; "animals_residents_age_value"; "employees_id_value";
            "employees_firstName_value"; "employees_lastName_value"; "employees_managers_value";
            "employees_responsibleFor_value"; "hours_open_value"; "hours_close_value";
            "prices_value";
            `)
    }
}

function entryCalculator(entrants) {
    if (entrants == undefined || logic.getObjectSize(entrants) == 0) {
        return "0"
    } else {
        return bigDates("key_later_2_prices").map((elm, index) => entrants[elm] * bigDates("prices_value")[index]).reduce((total, elm) => total + elm);
    }
}


function hourDisplay(index) {
    if (index == (bigDates("key_layer_2_hours").length - 1)) {
        return "CLOSED"
    } else {
        return `Open from ${logic.setHour(...bigDates("hours_open_value"))[index]} until ${logic.setHour(...bigDates("hours_close_value"))[index]}`
    }
}

function schedule(dayName) {
    const obj = new Object
    if (dayName == undefined) {
        bigDates("key_layer_2_hours").forEach((elm, index) => logic.addNode(obj, elm, hourDisplay(index)));
        return obj
    } else {
        logic.addNode(obj, dayName, hourDisplay(bigDates("key_layer_2_hours").indexOf(dayName)));
        return obj
    }
}

function animalCount(species) {
    const obj = new Object
    if (species == undefined) {
        bigDates("animals_name_value").forEach((elm, index) => logic.addNode(obj, elm, bigDates("animals_residents_name_value")[index].length));
        return obj
    } else {
        return bigDates("animals_residents_name_value")[bigDates("animals_name_value").indexOf(species)].length
    }
}

function relatedData(index, dataIndex, dataKey) {
    const newArray = new Array
    for (let i = 0; i < dataIndex.length; i++) {
        if (dataIndex[i] == index) {
            newArray.push(dataKey[i])
        }
    }
    return newArray
}


function animalMap(options = 0) {
    const { includeNames, sex, sorted } = options

    const result = data.animals.reduce((obj, animal) => {
        const animalsInLocation = obj[animal.location] || []

        if (!includeNames) {
            obj[animal.location] = [...animalsInLocation, animal.name]
            return obj
        }
        let residents = animal.residents

        if (sex) {
            residents = residents.filter(resident => resident.sex === sex)
        }
        let animalNames = residents.map(({ name }) => name)

        if (sorted) {
            animalNames = animalNames.sort()
        }
        obj[animal.location] = [...animalsInLocation, {
            [animal.name]: animalNames
        }]

        return obj
    }, {})
    return result
}


function animalsByIds(...ids) {
    const newArray = new Array
    for (let i of ids) {
        const array = data.animals.filter((elm) => elm.id == i)
        newArray.push(array[0]);
    }
    return newArray
};

function employeeByName(employeeName) {
    if (employeeName == undefined) {
        return {}
    } else {
        const ind1 = bigDates("employees_firstName_value").indexOf(employeeName);
        const ind2 = bigDates("employees_lastName_value").indexOf(employeeName);
        if (ind1 > 0) {
            return data.employees[ind1]
        } else if (ind2 > 0) {
            return data.employees[ind2]
        } else {
            alert("Invalid Name")
        }
    }
};

function employeeCoverage(idOrName) {
    const obj = new Object
    const complete_Name = bigDates("employees_firstName_value").map((elm, index) => `${elm} ${bigDates("employees_lastName_value")[index]}`)
    complete_Name.forEach((elm, index) => logic.addNode(obj, elm, bigDates("employees_responsibleFor_value")[index].map((elmId) => ((data.animals.filter((animal) => animal.id == elmId)).map((elmm) => elmm.name)).toString())))
    if (idOrName == undefined) {
        return obj
    } else {
        const ind1 = bigDates("employees_firstName_value").indexOf(idOrName);
        const ind2 = bigDates("employees_lastName_value").indexOf(idOrName);
        const ind3 = bigDates("employees_id_value").indexOf(idOrName);
        const newObj = new Object
        if (ind1 > 0) {
            logic.addNode(newObj, complete_Name[ind1], obj[complete_Name[ind1]])
            return newObj
        } else if (ind2 > 0) {
            logic.addNode(newObj, complete_Name[ind2], obj[complete_Name[ind2]])
            return newObj
        } else if (ind3 > 0) {
            logic.addNode(newObj, complete_Name[ind3], obj[complete_Name[ind3]])
            return newObj
        }
    }
};


function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
    var obj = new Object
    logic.addNode(obj, "id", id)
    logic.addNode(obj, "firstName", firstName)
    logic.addNode(obj, "lastName", lastName)
    logic.addNode(obj, "managers", managers)
    logic.addNode(obj, "responsibleFor", responsibleFor)
    data.employees.push(obj)
}

function isManager(id) {
    const managers_Array = new Array;
    bigDates("employees_managers_value").forEach((elm) => elm.forEach((elmt) => managers_Array.push(elmt)))
    if ((managers_Array.find((elm) => elm == id)) == undefined) {
        return false
    } else {
        return true
    }
}



function animalsOlderThan(animal, age) {
    return bigDates("animals_residents_age_value")[bigDates("animals_name_value").indexOf(animal)].some((elm) => elm > age)
}

function oldestFromFirstSpecies(id) {
    const first_Specie = bigDates("employees_responsibleFor_value")[bigDates("employees_id_value").indexOf(id)][0]
    const array_Ages = bigDates("animals_residents_age_value")[bigDates("animals_id_value").indexOf(first_Specie)]
    const array_Sex = bigDates("animals_residents_sex_value")[bigDates("animals_id_value").indexOf(first_Specie)]
    const array_Name = bigDates("animals_residents_name_value")[bigDates("animals_id_value").indexOf(first_Specie)]
    const index = array_Ages.indexOf(array_Ages.reduce((a, b) => Math.max(a, b)))
    const newArray = new Array;
    newArray.push(array_Name[index])
    newArray.push(array_Sex[index])
    newArray.push(array_Ages[index])
    return newArray
}

function increasePrices(percentage) {
    const array = bigDates("prices_value").map((elm) => (elm * (1 + (percentage) / 100) + 0.001).toFixed(2))
    const obj = new Object
    bigDates("key_later_2_prices").forEach((elm, index) => logic.addNode(obj, elm, array[index]))
    data.prices = obj
    return data.prices
}

// bigDates("animals_residents_name_value").forEach((array) => number += array.length)



class Animal {
    constructor(name, age, sex, species) {
        this.name = name
        this.age = age
        this.sex = sex
        this.species = species
    }
    info() {
        const { name, age, sex, species } = this
        return `${name} is a ${age} year old ${sex} ${species.slice(0, -1)}`
    }

    static total_animals() {
        return createAnimals().length
    }
}

function createAnimals() {
    const animals = new Array
    data.animals.forEach(animal => (
        animal.residents.forEach(({ name, age, sex }) => (
            animals.push(new Animal(name, age, sex, animal.name))
        ))
    ))
    return animals
}

function createEmployee(personalInfo, associatedWith) {
    const obj = new Object
    logic.getKeyName(personalInfo).forEach((elm) => logic.addNode(obj, elm, personalInfo[elm]))
    logic.getKeyName(associatedWith).forEach((elm) => logic.addNode(obj, elm, associatedWith[elm]))
    return obj
}

module.exports = {
    entryCalculator: entryCalculator,
    schedule: schedule,
    animalCount: animalCount,
    animalMap: animalMap,
    animalsByIds: animalsByIds,
    employeeByName: employeeByName,
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