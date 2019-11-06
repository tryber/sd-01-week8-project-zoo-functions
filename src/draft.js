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
// // // from()


// // // Concat arrays

// // function concatArray(array_1, array_2) {
// //     const array_3 = new Array;
// //     for (const element of array_3) {
// //         array_3 = array_1.concat(array_2)
// //     }
// //     return array_3
// // }
// // console.log(concatArray(newArray, newArray))

// var andy = { andy: "andy", bolivar: "bolivar" }
// console.log((typeof andy) == "object")


// const objectZoo = new Object;




// const key = ["andy", "andy", "andy"]

// const value = [1, 2, 3]

// const { helo = [1, 2, 3] } = objectZoo

// console.log(objectZoo)


console.log(getObjectSize() == {})



// data: {4*{ key : x }} // x data depth variation


// data.animals: [4*{key:value}{key:[3*{key:value}]}]

// key.forEach((element) => createObject(objectZoo, element, value))


// key_section_1.forEach((element) => logic.createObject(zooDates, element, bigSearch(element)))


// logic.getKeyName(data).forEach((element) => logic.createObject(zooDates, element, "taylor"))

// console.log(data.hours)
// console.log(logic.getNodes(data.hours))

// console.log(data.prices)
// console.log(logic.getNodes(data.prices))
// console.log(typeof data)console.log(logic.getKeyName(data.animals[0].residents[0])).forEach((element) => console.log(logic.arraySerchObjectElement(element, ...data.animals))))


// logic.getKeyName(data.animals[0]).forEach((element) => console.log(logic.arraySerchObjectElement(element, ...data.animals)))
console.log(logic.getKeyName(data.animals[0]).forEach((element) => console.log(logic.arraySerchObjectElement(element, ...data.animals))))


// making a object

const obj = new Object
if (options == undefined) {
    bigDates("animals_location_value").filter((elm, index) => bigDates("animals_location_value").indexOf(elm) === index).forEach((elm) => logic.addNode(obj, elm, relatedData(elm, bigDates("animals_location_value"), bigDates("animals_name_value"))));
    return obj
} else if (options.includeNames) {
    const array_location_filter = bigDates("animals_location_value").filter((elm, index) => bigDates("animals_location_value").indexOf(elm) === index)
    const newArray = new Array;
    if (options.sorted) {
        bigDates("animals_name_value").forEach((elm, index) => newArray.push(logic.createObject(elm, bigDates("animals_residents_name_value")[index].sort())))
    } else {
        bigDates("animals_name_value").forEach((elm, index) => newArray.push(logic.createObject(elm, bigDates("animals_residents_name_value")[index])))
    }
    const array = new Array
    array_location_filter.forEach((elm) => array.push(relatedData(elm, bigDates("animals_location_value"), bigDates("animals_name_value"))))
    for (let elm of array_location_filter) {
        let animalName = array[array_location_filter.indexOf(elm)]
        let index = animalName.map((elmt) => bigDates("animals_name_value").indexOf(elmt))
        obj[elm] = index.map((elmm) => newArray[elmm])
    }

    return obj
}