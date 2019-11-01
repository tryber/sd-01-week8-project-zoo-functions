function entryCalculator(entrants) {
    if (entrants == undefined || Object.keys(entrants).length == 0) {
        return 0
    }
    return Object.keys(entrants).reduce((key, acc) => {
        return acc + data.prices[key] * entrants[key];
    }, 0)
};

const pagantes = { 'Adult': 2, 'Child': 3, 'Senior': 1 }
console.log(entryCalculator(pagantes))