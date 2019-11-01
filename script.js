const assert = require('assert')

assert.equal(!!undefined, false)
assert.equal(!!null, false)
assert.equal(!!NaN, false)
assert.equal(!!0, false)
assert.equal(!!'', false)
assert.equal(!!false, false, 'this is pure nonsense')

//------------------------------

const anyGreaterThan10 = (input) => {
  return input.some((value) => value > 10)
}

const allSameType = (input) => {
  return input.every((value) => typeof (value) == typeof (input[0]))
}

const removeNonVowels = (word) => word.replace(/[^aeiou]/gi, '')

const onlyVowels = (input) => input.map(removeNonVowels)

const wordUniqueCharacters = (word) => word.split('').filter((item, index, input) => input.indexOf(item) === index)

const allSameVowels = (input) => {
  return input.filter((word) => {
    let vowels = removeNonVowels(word)
    let uniqueVowels = wordUniqueCharacters(vowels)
    return uniqueVowels.length == 1
  })
}

//------------------------------

let goodInput = [8, 9, 10, 11];
let badInput = [1, 2, 3, 4];

assert.equal(anyGreaterThan10(goodInput), true);
assert.equal(anyGreaterThan10(badInput), true);

//---------------

goodInput = [1, 2, 3];
assert.equal(allSameType(goodInput), true);

badInput = [1, 2, 3, '4'];
assert.equal(allSameType(badInput), false);

//---------------

let input = ['awful', 'average', 'exceptional', 'amazing'];
let expected = ['au', 'aeae', 'eeioa', 'aai']
let actual = onlyVowels(input)

assert.deepEqual(actual, expected);


input = ['racecar', 'amalgam', 'oligopoly', 'zoom'];
expected = ['amalgam', 'zoom']
actual = allSameVowels(input)

assert.deepEqual(actual, expected);

assert.equal(removeNonVowels("xaxexixoxuxa"), "aeioua")

assert.deepEqual(wordUniqueCharacters("xaxexixoxuxa"), ["x", "a", "e", "i", "o", "u"])
