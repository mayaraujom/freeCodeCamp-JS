// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching 
// name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the
//  collection if it is to be included in the returned array.

// For example, if the first argument is 
// [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and 
// the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
// because it contains the name and its value, that was passed on as the second argument.

// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property 
// as its own property (as opposed to inheriting it).

function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    const filtered = collection.filter(obj => {
        for (let i = 0; i < sourceKeys.length; i++) {
            if (!obj.hasOwnProperty(sourceKeys[i]) ||
                obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });

    return filtered;

}

console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3, "d": 9999 }], { "a": 1, "b": 9999, "c": 3 }));