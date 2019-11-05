const data = require('./data');
const logic = require('./logic')




const key_layer_1 = logic.getKeyName(data);
const key_layer_2_animals = logic.getKeyName(data.animals[0]);
const key_layer_3_animals = logic.getKeyName(data.animals[0].residents[0]);
const key_layer_2_employees = logic.getKeyName(data.employees[0]);
const key_layer_2_hours = logic.getKeyName(data.hours);
const key_layer_3_hours_dayName = logic.getKeyName(data.hours.Thursday);
const key_later_2_prices = logic.getKeyName(data.prices);
const animals_id_value = logic.displayValues(data.animals, "id");
const animals_name_value = logic.displayValues(data.animals, "name");
const animals_popularity_value = logic.displayValues(data.animals, "popularity");
const animals_location_value = logic.displayValues(data.animals, "location");
const animals_residents_name_value = logic.displayValues(data.animals, "residents").map((elm) => logic.displayValues(elm, "name"))
const animals_residents_sex_value = logic.displayValues(data.animals, "residents").map((elm) => logic.displayValues(elm, "sex"))
const animals_residents_age_value = logic.displayValues(data.animals, "residents").map((elm) => logic.displayValues(elm, "age"))
const employees_id_value = logic.displayValues(data.employees, "id");
const employees_firstName_value = logic.displayValues(data.employees, "firstName");
const employees_lastName_value = logic.displayValues(data.employees, "lastName");
const employees_managers_value = logic.displayValues(data.employees, "managers");
const employees_responsibleFor_value = logic.displayValues(data.employees, "responsibleFor");
const hours_open_value = key_layer_2_hours.map((elm) => data.hours[elm].open);
const hours_close_value = key_layer_2_hours.map((elm) => data.hours[elm].close);
const prices_value = key_later_2_prices.map((elm) => data.prices[elm]);















// function entryCalculator(entrants) {
//     if ((entrants == false) || (logic.getObjectSize(entrants) == 0)) {
//         return "0"
//     } else {
//         const array_Prices = logic.getValues(data.prices);
//         const array_Order_People = new Array;
//         logic.getKeyName(data.prices).forEach((key) => array_Order_People.push(entrants[key]));
//         const array_sum = array_Prices.map((elm, index) => (elm * array_Order_People[index]));
//         const number_sum = array_sum.reduce((total, elm) => (total += elm));
//         return number_sum
//     }
// };

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

// module.exports = {
//     entryCalculator: entryCalculator,
//     schedule: schedule,
//     animalCount: animalCount,
//     animalMap: animalMap,
//     animalPopularity: animalPopularity,
//     animalsByIds: animalsByIds,
//     animalByName: animalByName,
//     employeesByIds: employeesByIds,
//     employeeByName: employeeByName,
//     managersForEmployee: managersForEmployee,
//     employeeCoverage: employeeCoverage,
//     addEmployee: addEmployee,
//     isManager: isManager,
//     animalsOlderThan: animalsOlderThan,
//     oldestFromFirstSpecies: oldestFromFirstSpecies,
//     increasePrices: increasePrices,
//     createAnimals: createAnimals,
//     Animal: Animal,
//     createEmployee: createEmployee
//