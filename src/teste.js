const data = require('./data')
const bichos = data.animals

const filterOne = [...new Set(bichos.map(select => select.location))]
const mapAnimals = {}
filterOne.forEach(element => {
    let ind = bichos.filter(select => select.location === element).map(valores => valores.name)
    mapAnimals[element] = ind
    return mapAnimals
})
const mapAnimalsNames = {}
    // filter(select => select.name).map(valores => valores.residents)
filterOne.forEach(element => {
    let ind = bichos.filter(select => select.location === element).map(select => select.residents)
    mapAnimalsNames[element] = ind
    return mapAnimalsNames
})


console.log(mapAnimalsNames)