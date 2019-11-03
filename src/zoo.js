const data = require('./data')

function entryCalculator(entrants=0) {
  if(Object.keys(entrants).length === 0) return 0; 
  return Object.keys(entrants).reduce((acc, key) => {
    return acc + data.prices[key] * entrants[key];}, 0)
  };
  
  function schedule (dayName=0) {
    const cronograma = Object.assign({}, data.hours)
    
    Object.keys(cronograma).forEach((key)=>{
      cronograma[key] = `Open from ${data.hours[key].open}am until ${data.hours[key].close -12}pm`;
    })
    cronograma.Monday='CLOSED';
    
    if(dayName==0){
      return cronograma;
    } else {
      let obj = {}
      obj[dayName] = cronograma[dayName]
      return obj;
    }
  }
  
  function animalCount(species = 0) {
    const animals = data.animals, obj = {}
    const isSpecie = (animal, species) => animal.name === species
    const filterAnimals = (animals, species) =>
    animals.filter((animal) => isSpecie(animal, species))
    if (species == 0) {
      Object.keys(animals).forEach((key) => {
        obj[data.animals[key].name] = data.animals[key].residents.length
      })
    } else {
      return filterAnimals(data.animals, species)[0].residents.length
    }
    return obj
  } 
  
  function animalMap (options) {
    const animals = data.animals, obj = {}
    const isLocation = (animal, location) => animal.location === location
    const filterAnimals = (animals, location) => animals.filter((animal) => isLocation(animal, location))
    const getAllLocation = data.animals.map((animal)=>animal.location)
    const locationReduce = getAllLocation.filter((este, i) => getAllLocation.indexOf(este) === i);
    if(options===undefined || options['includeNames']===undefined){
      locationReduce.forEach((item)=>{
        obj[item]=filterAnimals(animals,item).map((item)=>item.name)
      })} else if(options) {
        locationReduce.forEach((item)=>{
          obj[item]=filterAnimals(animals,item)
          .map((item)=>( { [item.name] : item.residents.map((nome)=>nome.name) } ) )})
          if(options['sorted']){
            Object.keys(obj).forEach((item)=>(obj[item].forEach((item2)=>Object.keys(item2).forEach((item3)=>item2[item3].sort()))))
          }
          if(options['sex']=='female'){
            locationReduce.forEach((item)=>{
              obj[item]=filterAnimals(animals,item)
              .map((item)=>( { [item.name] : item.residents.filter((nameAnimal)=>nameAnimal.sex==='female').map((value)=>value.name)}))})}
            }
            return obj
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
          