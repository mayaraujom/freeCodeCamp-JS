// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns 
// true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {

    const arrayMutavel = [...arr];

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            break;
        } arrayMutavel.splice(0, 1)
    }

    return arrayMutavel;
}

console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));