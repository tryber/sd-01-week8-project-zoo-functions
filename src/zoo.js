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
            Object.keys(obj).forEach((item)=>
            (obj[item].forEach((item2)=>Object.keys(item2).forEach((item3)=>item2[item3].sort()))))
          }
          if(options['sex']=='female'){
            locationReduce.forEach((item)=>{
              obj[item]=filterAnimals(animals,item)
              .map((item)=>( { [item.name] : item.residents
                .filter((nameAnimal)=>nameAnimal.sex==='female')
                .map((value)=>value.name)
              }))})}}
        return obj
      };
      
      
      function animalPopularity (rating) {
        // seu código aqui
      };
      
      function animalsByIds (...values) {
        const obj=[];
        values.map((item)=>obj.push(data.animals.find((animal)=>animal.id===item)));
        return obj;
      };
      
      function animalByName (animalName) {
        // seu código aqui
      };
      
      function employeesByIds (ids) {
        // seu código aqui
      };
      
      function employeeByName (employeeName) {      
        let obj;
        if(employeeName===undefined){
          obj={};
        }else {
          obj=data.employees.find((employe)=>employe.firstName===employeeName || employe.lastName===employeeName)
        }
        return obj
      };
      
      function managersForEmployee (idOrName) {
        // seu código aqui
      };
      
      function employeeCoverage (idOrName) {
        let obj={}
        
        const allIddata= data.employees.map((item)=>item.id);
        const returnIdResponsibleForById=(idEmployee)=>
        data.employees.find((employee)=>employee.id===idEmployee)
        
        const funcGetResult=id=>{
          obj[`${returnIdResponsibleForById(id).firstName} ${returnIdResponsibleForById(id).lastName}`]=
          returnIdResponsibleForById(id).responsibleFor.map((idAnimal)=>
          data.animals.find((animal)=>animal.id===idAnimal).name);
        }
        if(idOrName===undefined){
          allIddata.forEach((id)=>funcGetResult(id));
        } else {
          let value={};
          if(idOrName.length<36){
            value=data.employees.find(item=>item.firstName===idOrName || item.lastName===idOrName)
            funcGetResult(value['id']) 
          } else {
            value=data.employees.find(item=>item.id===idOrName)
            funcGetResult(value['id'])
          }
        }
        return obj;
      };
      
      function addEmployee(...arr) {
        const property = Object.keys(data.employees[0])
        const newEmployees={}
        const checkUndefined=index=>(arr[index]===undefined)?arr[index]=[]:arr[index];
        property.forEach((item,index)=>{
          newEmployees[item]=checkUndefined(index);
        })
        data.employees.push(newEmployees)
      }
      
      function isManager(id) {
        return data.employees.some(employee=>
          employee.managers.some(ids=>ids===id))
        }
        
        function animalsOlderThan(animal, age) {
          return data.animals.find(objAnimal=>objAnimal.name===animal)
          .residents.every(value=>value['age']>=age)
        }
        
        function oldestFromFirstSpecies(id) {
          const employee=employeeCoverage(id)
          const specie=Object.values(employee)[0][0]
          const animalOldest = (previus,currentValue)=>
          (previus.age<currentValue.age)? previus=currentValue:previus;
          const obj=Object.values((data.animals.find((animal)=>animal.name===specie)
          .residents.reduce(animalOldest)))
          return obj;
        }
        
        function increasePrices(percentage) {
          const calculate=(perc,value)=>value+=((value/100)*perc)
          Object.keys(data.prices).forEach(type=>
            data.prices[type]=Math.round(calculate(percentage,data.prices[type])*100)/100)
        }
        
        class Animal {
          constructor(name,sex,age,species){
            this.name=name;
            this.sex=sex;
            this.age=age;
            this.species=species;
          }
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
        