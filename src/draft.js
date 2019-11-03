// // data object path: 3{key : value}
// const newObject = { KeyName_1: "bitElement_1", KeyName_2: "bitElement_2", KeyName_3: "bitElement_3" };

// // data array path: 3[value]
// const newArray = ["bitElement_1", "bitElement_2", "bitElement_3"]

// // display object's key:value // Object
// console.log(newObject);

// // display array's value // Array
// console.log(newArray);

// // display object's first value // Object
// console.log(newObject["KeyName_1"]);

// // display array's first value // Array
// console.log(newArray[0]);


// var obj = {};
// var descriptor = { andy: "bolivar" }

// Object.defineProperty(obj, 'property1', {
//     value: "value_1",
//     writable: false
// });
// Object.defineProperty(obj, 'property2', {
//     value: "value_2",
//     writable: true
// });
// obj.property1 = "taylor"
// console.log(obj.property1)
// obj.property2 = "taylor"
// console.log(obj.property2)

// Object.defineProperties(obj, "property3", {
//     value: "value_3"

// })

// function createObject(object_name, key_Name, element) {
//     Object.defineProperties(object_name, key_Name, {
//         value: element,
//         set(value) {
//             key_Name
//         }
//         writable: true,

//     })
// }
// get() {
//         console.log('get!');
//         return temperature;
//     },
//     set(value) {
//         temperature = value;
//         archive.push({ val: temperature });
//     }

// function Archiver() {
//     var temperature = null;
//     var archive = [];

//     Object.defineProperty(this, 'temperature', {
//         get() {
//             console.log('get!');
//             return temperature;
//         },
//         set(value) {
//             temperature = value;
//             archive.push({ val: temperature });
//         }
//     });

//     this.getArchive = function() { return archive; };
// }

// var arc = new Archiver();
// arc.temperature; // 'get!'
// arc.temperature = 11;
// arc.temperature = 13;
// arc.getArchive(); // [{ val: 11 }, { val: 13 }]



// // Array.prototype.myUcase = function() {
// //     for (i = 0; i < this.length; i++) {
// //         this[i] = this[i].toUpperCase();
// //     }
// // };

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // const fruits_upperCase = fruits.myUcase();

// // console.log(fruits)
// // console.log()

// // concat();
// // var hege = ["Cecilie", "Lone"];
// // var stale = ["Emil", "Tobias", "Linus"];
// // var children = hege.concat(stale);

// // entries()
// // var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // var f = fruits.entries();

// // for (x of f) {
// //     document.getElementById("demo").innerHTML += x;
// // }
// // from()


// // Concat arrays

// function concatArray(array_1, array_2) {
//     const array_3 = new Array;
//     for (const element of array_3) {
//         array_3 = array_1.concat(array_2)
//     }
//     return array_3
// }
// console.log(concatArray(newArray, newArray))

var andy = { andy: "andy", bolivar: "bolivar" }
console.log((typeof andy) == "object")


const objectZoo = new Object;

function makeObject(objectZoo, )
objectZoo

const key = ["andy", "andy", "andy"]

const value = [1, 2, 3]

const { helo = [1, 2, 3] } = objectZoo

console.log(objectZoo)