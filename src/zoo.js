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

function animalCount(species) {
    const bichos = data.animals
    const chaves = bichos.map(bicharada => bicharada.name)
    const valores = bichos.map(bicharada => bicharada.residents.length)
    const bicharada = {}
    for (let index = 0; index < chaves.length; index++) {
        bicharada[chaves[index]] = valores[index]
    }
    if (species === undefined || Object.keys(species).length === 0) {
        return bicharada
    } else {
        return bicharada[species]
    }
}

function animalMap(options = {}) {
    const { includeNames, sex, sorted } = options
    const obj = {}
    const locations = [...new Set(data.animals.map(species => species.location))]
    locations.forEach(location => {
        if (!includeNames) {
            obj[location] = data.animals
                .filter(animal => animal.location == location)
                .map(species => species.name)
            return obj
        }
        obj[location] = data.animals
            .filter(animal => animal.location == location)
            .map(species => {
                let residents = species.residents
                if (sex) {
                    residents = residents.filter(resident => resident.sex === sex)
                }
                let animalNames = residents.map(resident => resident.name)
                if (sorted) {
                    animalNames = animalNames.sort()
                }
                return {
                    [species.name]: animalNames
                }
            })
    })
    return obj
};

function animalPopularity(rating) {
    // seu código aqui
};

function animalsByIds(...ids) {
    const bichos = data.animals
    const lista = []
    if (ids.length === 0) {
        return ids
    } else {
        for (let i = 0; i < ids.length; i++) {
            lista.push(bichos.find(select => select.id === ids[i]))
        }
        return lista
    }
};

function animalByName(animalName) {

};

function employeesByIds(ids) {

};

function employeeByName(employeeName) {
    return data.employees.find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName) || {}
}

function managersForEmployee(idOrName) {
    // seu código aqui
};

function employeeCoverage(idOrName) {
    const obj = {}
    const empregado = data.employees
    const animal = data.animals
    if (idOrName === undefined || Object.keys(idOrName).length === 0) {
        empregado.forEach(idFuncionarios => {
            obj[`${idFuncionarios['firstName']} ${idFuncionarios['lastName']}`] = idFuncionarios.responsibleFor
                .map(animaisPeloId => animal.find(animalIdComparar => animalIdComparar.id === animaisPeloId).name)
        })
    } else {
        const listaEmpregado = empregado.find(({ firstName, lastName, id }) => firstName === idOrName || lastName === idOrName || id === idOrName)
        obj[`${listaEmpregado.firstName} ${listaEmpregado.lastName}`] = listaEmpregado.responsibleFor
            .map(animaisPeloId => animal.find(animalIdComparar => animalIdComparar.id === animaisPeloId).name)
    }
    return obj
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
    const empregadoNovo = { id, firstName, lastName, managers, responsibleFor }
    return data.employees.push(empregadoNovo)
}

function isManager(id) {
    return data.employees.some(gerente => gerente.managers.some(dis => dis === id))
}

function animalsOlderThan(animal, age) {
    const bichos = data.animals
    return bichos.find(select => select.name === animal).residents.every(select => select.age > age)
}

function oldestFromFirstSpecies(id) {
    const funcionario = data.employees
    const animais = data.animals
    const valores = funcionario.find(select => select.id === id).responsibleFor[0]
    const animaisEmOrdem = animais.find(select => select.id === valores).residents.sort((idadeA, idadeB) => idadeB.age - idadeA.age)[0]
    const { name, sex, age } = animaisEmOrdem
    const lista = [name, sex, age]
    return lista
}

function increasePrices(percentage) {
    const porcentagem = parseFloat(`0.${percentage}`)
    const aumentar = (valor) => (valor * porcentagem + valor)
    const valorCorrigido = (numero) => Math.round(numero * 100) / 100
    const newPrices = data.prices
    Object.keys(newPrices).forEach(key => newPrices[key] = valorCorrigido(aumentar(newPrices[key])))
    return newPrices
}

class Animal {
    constructor(name, sex, age, species) {
        this.name = name
        this.sex = sex
        this.age = age
        this.species = species
    }
    static info() {
        return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`
    }
    static totalAnimal() {
        return data.animais.length
    }

}

function createAnimals(name = {}, sex, age, species) {
    const criandoNovoAnimal = data.animals
    console.log('************************************')
    console.log(criandoNovoAnimal.length)
    console.log('************************************')
    const obj = { name, sex, age, species }
    criandoNovoAnimal.push(obj)
    return criandoNovoAnimal
}

function createEmployee(personalInfo, associatedWith) {
    return {...personalInfo, ...associatedWith }
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