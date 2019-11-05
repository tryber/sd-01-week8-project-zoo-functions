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
            return bigDates("key_later_2_prices").map((elm) => data.hours[elm].close);
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

// function schedule(dayName) {
//     if (dayName == undefined) {
//         const key_Day = logic.getKeyName(data.hours)
//         const openHours = new Array;
//         key_Day.forEach((key) => openHours.push(data.hours[key].open));
//         const closeHours = new Array;
//         key_Day.forEach((key) => closeHours.push(data.hours[key].close));
//         const openHoursAMPM = logic.setHour(...openHours);
//         const closeHoursAMPM = logic.setHour(...closeHours);
//         const obj = new Object;
//         for (i = 0; i < key_Day.length; i++) {
//             if (i == (key_Day.length - 1)) {
//                 obj[key_Day[i]] = 'CLOSED'
//             } else {
//                 obj[key_Day[i]] = `Open from ${openHoursAMPM[i]} until ${closeHoursAMPM[i]}`
//             }
//         }
//         return obj
//     } else {
//         const openHoursAMPM = logic.setHour(data.hours[`${dayName}`].open);
//         const closeHoursAMPM = logic.setHour(data.hours[`${dayName}`].close);
//         const obj = new Object;
//         if (dayName == "Monday") {
//             obj[dayName] = 'CLOSED'
//         } else {
//             obj[dayName] = `Open from ${openHoursAMPM} until ${closeHoursAMPM}`
//         }
//         return obj
//     }
// }


// function animalCount(species) {
//     const obj = new Object;
//     const array_Animals = new Array
//     data.animals.forEach((elm) => array_Animals.push(elm.name))
//     const array_Residents = new Array
//     data.animals.forEach((elm) => array_Residents.push(elm.residents.length))
//     array_Animals.forEach((elm, index) => logic.createObject(obj, elm, array_Residents[index]))
//     if (species == undefined) {
//         return obj
//     } else {
//         return obj[species]
//     }
// };


// animalMap()

// function animalMap(options) {
//     const obj = new Object;
//     const array_Animals = new Array
//     data.animals.forEach((elm) => array_Animals.push(elm.name))
//     const array_Location = new Array
//     data.animals.forEach((elm) => array_Location.push(elm.location))
//     const array_Residents_Name = new Array
//     data.animals.forEach((elm) => elm.residents.forEach((elm) => array_Residents_Name.push(elm.name)))
//     const array_Residents_Sex = new Array
//     data.animals.forEach((elm) => elm.residents.forEach((elm) => array_Residents_Sex.push(elm.sex)))
//     const array_Location_Filter = array_Location.filter((elm, index) => array_Location.indexOf(elm) === index);
//     if (options == undefined) {
//         array_Location_Filter.forEach((elm) => logic.createObject(obj, elm, array_Animals.filter((elmt) => array_Animals.indexOf(elmt) === array_Location.indexOf(elm))))
//         array_Location.map((elm) => {
//                 if (elm == "NE") {
//                     array_Location.indexOf()
//                 }
//             }
//         };

//         function animalPopularity(rating) {
//             // seu código aqui
//         };

//         function animalsByIds(ids) {
//             // seu código aqui
//         };

//         function animalByName(animalName) {
//             // seu código aqui
//         };

//         function employeesByIds(ids) {
//             // seu código aqui
//         };

//         function employeeByName(employeeName) {
//             // seu código aqui
//         };

//         function managersForEmployee(idOrName) {
//             // seu código aqui
//         };

//         function employeeCoverage(idOrName) {
//             // seu código aqui
//         };

//         function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//             // seu código aqui
//         }

//         function isManager(id) {
//             // seu código aqui
//         }

//         function animalsOlderThan(animal, age) {
//             // seu código aqui
//         }

//         function oldestFromFirstSpecies(id) {
//             // seu código aqui
//         }

//         function increasePrices(percentage) {
//             // seu código aqui
//         }

//         class Animal {
//             // seu código aqui
//         }

//         function createAnimals() {
//             // seu código aqui
//         }

//         function createEmployee(personalInfo, associatedWith) {
//             // seu código aqui
//         }

module.exports = {
    entryCalculator: entryCalculator,
    // schedule: schedule,
    // animalCount: animalCount,
    // animalMap: animalMap,
    // animalPopularity: animalPopularity,
    // animalsByIds: animalsByIds,
    // animalByName: animalByName,
    // employeesByIds: employeesByIds,
    // employeeByName: employeeByName,
    // managersForEmployee: managersForEmployee,
    // employeeCoverage: employeeCoverage,
    // addEmployee: addEmployee,
    // isManager: isManager,
    // animalsOlderThan: animalsOlderThan,
    // oldestFromFirstSpecies: oldestFromFirstSpecies,
    // increasePrices: increasePrices,
    // createAnimals: createAnimals,
    // Animal: Animal,
    // createEmployee: createEmployee
}