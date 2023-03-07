// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
//  This means that given an element x, the 'truth test' is passed if func(x) is true. 
// If no element passes the test, return undefined.

function findElement(arr, func) {
    let result;
    for (let i=0; i < arr.length; i++) {
        const test = func(arr[i]);
        if (test) {
            result = arr[i]
            break;
        }        
    }
    return result;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));