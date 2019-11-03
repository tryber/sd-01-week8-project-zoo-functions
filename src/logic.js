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

// console.log(getValues(newObject));

// Getting objects size

// console.log(Object.keys(newObject).length)

function getObjectSize(object) {
    const keyName = new Array;
    for (var key in object) {
        keyName.push(key);
    }
    return keyName.length
}

// Search [{key:value}]
function arraySerchObjectElement(key_name, ...array) {
    newArray = new Array;
    for (let element of array) {
        if (typeof element == "object") {
            newArray.push(element[`${key_name}`])
        } else {
            break
        }
    }
    return newArray
}


// New Object

function createObject(object_name, key_Name, element) {
    object_name[`${key_Name}`] = element
}

module.exports = {
    getKeyName: getKeyName,
    getValues: getValues,
    getObjectSize: getObjectSize,
    arraySerchObjectElement: arraySerchObjectElement,
    createObject: createObject
}