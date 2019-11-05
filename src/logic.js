// Getting object's key // Array

// console.log(Object.keys(newObject));

function getKeyName(object) {
    const keyName = new Array;
    for (var key in object) {
        keyName.push(key);
    }
    return keyName
}

// Geting object's values // Array

function getValues(object) {
    const values = new Array;
    for (var key in object) {
        values.push(object[`${key}`]);
    }
    return values
}

function displayValues(node, key_deep_node) {
    return node.map((elm) => elm[key_deep_node]);
}

module.exports = {
    getKeyName: getKeyName,
    getValues: getValues,
    displayValues: displayValues
}







// function createObject(object_name, key_Name, element) {
//     object_name[`${key_Name}`] = element
// }






// // console.log(getValues(newObject));

// // Getting objects size

// // console.log(Object.keys(newObject).length)

// function getObjectSize(object) {
//     const keyName = new Array;
//     for (var key in object) {
//         keyName.push(key);
//     }
//     return keyName.length
// }

// // Search [{key:value}]
// function arraySerchObjectElement(key_name, ...array) {
//     newArray = new Array;
//     for (let element of array) {
//         newArray.push(element[`${key_name}`])
//     }
//     return newArray
// }



// function typeElement(element) {
//     if (element == "object") {
//         return logic.getKeyName(data[key])
//     } else {
//         return element
//     }
// }

// // Hours AM and PM

// function setHour(...input) {
//     const hour = new Array;
//     for (let i of input) {
//         if ((i == 24) || (i < 12)) {
//             if (i == 24) {
//                 hour.push(`0am`);
//             } else {
//                 hour.push(`${i}am`);
//             }
//         } else {
//             if (i == 12) {
//                 hour.push(`0pm`);
//             } else {
//                 hour.push(`${i - 12}pm`);
//             }
//         }
//     }
//     return hour
// }

// function setValue(...input) {
//     const closeHour = new Array;
//     for (let i of input) {
//         closeHour.push(data.hours[`${i}`].close);
//     }
//     return closeHour
// }

// module.exports = {
//     getKeyName: getKeyName,
//     getValues: getValues,
//     getObjectSize: getObjectSize,
//     arraySerchObjectElement: arraySerchObjectElement,
//     createObject: createObject,
//     typeElement: typeElement,
//     setHour: setHour
// }