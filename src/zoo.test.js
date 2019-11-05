const assert = require('assert'),
  zoo = require('./zoo'),
  data = require('./data');

let actual, expected, options

/******************************************************************************/

/*******************/
/* entryCalculator */
/*******************/

// retorna 0 se nenhum argumento for passado
actual = zoo.entryCalculator();
assert.equal(actual, 0);

// retorna 0 se um objeto vazio for passado
actual = zoo.entryCalculator({});
assert.equal(actual, 0);

// retorna o preço total a ser cobrado dado o número de adultos, crianças e
// idosos
const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
actual = zoo.entryCalculator(entrants);

assert.equal(actual, 187.94);

/******************************************************************************/

/*************/
/* schedule */
/*************/

// sem parâmetros, retorna um cronograma legível para humanos
actual = zoo.schedule();
expected = {
  'Tuesday': 'Open from 8am until 6pm',
  'Wednesday': 'Open from 8am until 6pm',
  'Thursday': 'Open from 10am until 8pm',
  'Friday': 'Open from 10am until 8pm',
  'Saturday': 'Open from 8am until 10pm',
  'Sunday': 'Open from 8am until 8pm',
  'Monday': 'CLOSED'
};

assert.deepEqual(actual, expected);

// se um único dia for passado, retorna somente este dia em um formato
// legível para humanos
actual = zoo.schedule('Monday');
expected = {
  'Monday': 'CLOSED'
};

assert.deepEqual(actual, expected);

actual = zoo.schedule('Tuesday');
expected = {
  'Tuesday': 'Open from 8am until 6pm'
};

assert.deepEqual(actual, expected);

/******************************************************************************/

/***************/
/* animalCount */
/***************/

// sem parâmetros, retorna animais e suas quantidades
actual = zoo.animalCount();
expected = {
  'lions': 4,
  'tigers': 2,
  'bears': 3,
  'penguins': 4,
  'otters': 4,
  'frogs': 2,
  'snakes': 2,
  'elephants': 4,
  'giraffes': 6
};

assert.deepEqual(actual, expected);

// com o nome de uma espécide de animal, retorna somente a quantidade
actual = zoo.animalCount('lions');
expected = 4;

assert.deepEqual(actual, expected);

actual = zoo.animalCount('snakes');
expected = 2;

assert.deepEqual(actual, expected);

/******************************************************************************/

/*************/
/* animalMap */
/*************/

// sem parâmetros, retorna animais categorizados por localização
actual = zoo.animalMap();
expected = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes']
};

assert.deepEqual(actual, expected);

// com opções especificadas, retorna nomes de animais
options = { includeNames: true }
actual = zoo.animalMap(options);
expected = {
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }
  ],
  NW: [
    { tigers: ['Shu', 'Esther'] },
    { bears: ['Hiram', 'Edwardo', 'Milan'] },
    { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] }
  ],
  SE: [
    { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
    { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] }
  ],
  SW: [
    { frogs: ['Cathey', 'Annice'] },
    { snakes: ['Paulette', 'Bill'] }
  ]
};

assert.deepEqual(actual, expected);

// // com opções especificadas, retorna nomes de animais ordenados
options = { includeNames: true, sorted: true }
actual = zoo.animalMap(options);
expected = {
  NE: [
    { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] }
  ],
  NW: [
    { tigers: ['Esther', 'Shu'] },
    { bears: ['Edwardo', 'Hiram', 'Milan'] },
    { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] }
  ],
  SE: [
    { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
    { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] }
  ],
  SW: [
    { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] }
  ]
};

assert.deepEqual(actual, expected);

// // com oções especificadas, retorna somente nomes de animais macho/fêmea
options = { includeNames: true, sex: 'female' }
actual = zoo.animalMap(options);
expected = {
  NE: [
    { lions: ['Zena', 'Dee'] },
    { giraffes: ['Gracia', 'Vicky'] }
  ],
  NW: [
    { tigers: ['Shu', 'Esther'] },
    { bears: [] },
    { elephants: ['Ilana', 'Bea'] }
  ],
  SE: [
    { penguins: ['Keri'] },
    { otters: ['Mercedes', 'Margherita'] }
  ],
  SW: [
    { frogs: ['Cathey', 'Annice'] },
    { snakes: ['Paulette'] }
  ]
};

assert.deepEqual(actual, expected);

// // só retorna informações específicas de gênero se includeNames for setado
options = { sex: 'female' }
actual = zoo.animalMap(options)['NE'][0];
expected = 'lions';

assert.equal(actual, expected);

/******************************************************************************/

/****************/
/* animalsByIds */
/****************/

// sem parâmetros, retorna um array vazio
actual = zoo.animalsByIds();
expected = [];

assert.deepEqual(actual, expected);

// com um único id, retorna os animais com este id
actual = zoo.animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
expected = [{
  id: '0938aa23-f153-4937-9f88-4858b24d6bce',
  name: 'lions',
  popularity: 4,
  location: 'NE',
  residents: [
    { name: 'Zena', sex: 'female', age: 12 },
    { name: 'Maxwell', sex: 'male', age: 15 },
    { name: 'Faustino', sex: 'male', age: 7 },
    { name: 'Dee', sex: 'female', age: 14 }
  ]
}];

assert.deepEqual(actual, expected);

// com mais de um id, retorna os animais que têm um desses ids
actual = zoo.animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46');
expected = [{
  id: '0938aa23-f153-4937-9f88-4858b24d6bce',
  name: 'lions',
  popularity: 4,
  location: 'NE',
  residents: [
    { name: 'Zena', sex: 'female', age: 12 },
    { name: 'Maxwell', sex: 'male', age: 15 },
    { name: 'Faustino', sex: 'male', age: 7 },
    { name: 'Dee', sex: 'female', age: 14 }
  ]
}, {
  id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
  name: 'tigers',
  popularity: 5,
  location: 'NW',
  residents: [
    { name: 'Shu', sex: 'female', age: 19 },
    { name: 'Esther', sex: 'female', age: 17 }
  ]
}];

assert.deepEqual(actual, expected);

/******************************************************************************/

/******************/
/* employeeByName */
/******************/

// sem parâmetros, retorna um objeto vazio
actual = zoo.employeeByName();
expected = {};

assert.deepEqual(actual, expected);

// quando provido o primeiro nome do funcionário, retorna o objeto do
// funcionário
actual = zoo.employeeByName('Emery');
expected = {
  id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
  firstName: 'Emery',
  lastName: 'Elser',
  managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
  responsibleFor: ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
    'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
    '0938aa23-f153-4937-9f88-4858b24d6bce']
};

assert.deepEqual(actual, expected);

// quando provido o último nome do funcionário, retorna o objeto do funcionário
actual = zoo.employeeByName('Wishart');
expected = {
  id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
  firstName: 'Wilburn',
  lastName: 'Wishart',
  managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
  responsibleFor: ['78460a91-f4da-4dea-a469-86fd2b8ccc84',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
};

assert.deepEqual(actual, expected);

/******************************************************************************/

/********************/
/* employeeCoverage */
/********************/

// sem parâmetros, retorna uma lista de funcionários e os animais pelos quais
// eles são responsáveis
actual = zoo.employeeCoverage();
expected = {
  'Nigel Nelson': ['lions', 'tigers'],
  'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
  'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
  'Wilburn Wishart': ['snakes', 'elephants'],
  'Stephanie Strauss': ['giraffes', 'otters'],
  'Sharonda Spry': ['otters', 'frogs'],
  'Ardith Azevado': ['tigers', 'bears'],
  'Emery Elser': ['elephants', 'bears', 'lions']
};

assert.deepEqual(actual, expected);

// com o id de um funcionário, retorna os animais pelos quais o funcionário é
// responsável
actual = zoo.employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
expected = { 'Sharonda Spry': ['otters', 'frogs'] };

assert.deepEqual(actual, expected);

// com o primeiro nome de um funcionário, retorna os animais pelos quais o
// funcionário é responsável
actual = zoo.employeeCoverage('Stephanie');
expected = { 'Stephanie Strauss': ['giraffes', 'otters'] };

assert.deepEqual(actual, expected);

// com o último nome de um um funcionário, retorna os animais pelos quais o
// funcionário é responsável
actual = zoo.employeeCoverage('Azevado');
expected = { 'Ardith Azevado': ['tigers', 'bears'] };

assert.deepEqual(actual, expected);

/******************************************************************************/

/**************/
/* addEmploye */
/**************/

// adiciona um funcionário no fim da lista
zoo.addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe')

assert.equal(data.employees.length, 9)
let lastEmployee = data.employees[8]
assert.equal(lastEmployee.id, '39800c14-4b76-454a-858d-2f8d168146a7')
assert.equal(lastEmployee.firstName, 'John')
assert.equal(lastEmployee.lastName, 'Doe')
assert.deepEqual(lastEmployee.managers, [])
assert.deepEqual(lastEmployee.responsibleFor, [])

zoo.addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
  [
    '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
    'a67a36ee-3765-4c74-8e0f-13f881f6588a'
  ],
  [
    'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
    '210fcd23-aa7b-4975-91b7-0230ebb27b99'
  ])

assert.equal(data.employees.length, 10)
lastEmployee = data.employees[9]
assert.equal(lastEmployee.id, '4141da1c-a6ed-4cf7-90c4-99c657ba4ef3')
assert.equal(lastEmployee.firstName, 'Jane')
assert.equal(lastEmployee.lastName, 'Doe')
assert.deepEqual(lastEmployee.managers,
  [
    '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
    'a67a36ee-3765-4c74-8e0f-13f881f6588a'
  ])
assert.deepEqual(lastEmployee.responsibleFor, [
  'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
  '210fcd23-aa7b-4975-91b7-0230ebb27b99'
])

assert.equal(data.employees.length, 10)

/******************************************************************************/

/*************/
/* isManager */
/*************/

// testa se o id passado é de um gerente
actual = zoo.isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')
expected = false
assert.deepEqual(actual, expected)

actual = zoo.isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83')
expected = true
assert.deepEqual(actual, expected)

/******************************************************************************/

/********************/
/* animalsOlderThan */
/********************/

// passados o nome de uma espécie e uma idade, testa se todos os animais desta
// espécie possuem a idade mínima especificada
actual = zoo.animalsOlderThan('otters', 7)
expected = true

assert.deepEqual(actual, expected)

actual = zoo.animalsOlderThan('penguins', 10)
expected = false

assert.deepEqual(actual, expected)

/******************************************************************************/

/**************************/
/* oldestFromFirstSpecies */
/**************************/

// passado o id de um funcionário, encontra a primeira espécie de animal
// gerenciado pelo funcionáio, e retorna um array com nome, sexo e idade do
// animal mais velho dessa espécide
actual = zoo.oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992')
expected = ['Vicky', 'female', 12]

assert.deepEqual(actual, expected)

actual = zoo.oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad')
expected = ['Margherita', 'female', 10]

assert.deepEqual(actual, expected)

/******************************************************************************/

/******************/
/* increasePrices */
/******************/

// data uma porcentagem, incrementa todos os preços, arrendondados em duas casas
// decimais
zoo.increasePrices(50)
expected = {
  'Adult': 74.99,
  'Senior': 37.49,
  'Child': 31.49
}

assert.deepEqual(data.prices, expected)

zoo.increasePrices(30)
expected = {
  'Adult': 97.49,
  'Senior': 48.74,
  'Child': 40.94
}

assert.deepEqual(data.prices, expected)

/******************************************************************************/

/*****************/
/* createAnimals */
/*****************/

// retorna um array de objetos da classe Animal. Esta classe contém os atributos
// name, sex, age and species.
const animals = zoo.createAnimals()

assert.equal(animals.length, 31)

animals.forEach(animal => {
  assert.equal(typeof animal, 'object')
  assert.equal(animal.constructor.name, 'Animal')
  assert.equal(typeof animal.name, 'string')
  assert.ok(animal.sex === 'male' || animal.sex === 'female')
  assert.equal(typeof animal.age, 'number')
  assert.equal(typeof animal.species, 'string')
})

/***************/
/* Animal.info */
/***************/

// retorna uma string formatada descrevendo o animal
assert.equal(animals[0].info(), 'Zena is a 12 year old female lion')
assert.equal(animals[30].info(), 'Bernard is a 6 year old male giraffe')

/************************/
/* Animal.total_animals */
/************************/

// retorna o número total de animais existentes
assert.equal(zoo.Animal.total_animals(), 31)

/******************************************************************************/

/******************/
/* createEmployee */
/******************/

const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastname: 'Doe',
}

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  ]
}

expected = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastname: 'Doe',
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  ]
}

// cria um novo colaborador a partir de objetos contendo informações pessoais,
// gerentes e animais gerenciados
assert.deepEqual(zoo.createEmployee(personalInfo, associatedWith), expected)
