// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    const result = [];
    for (let item in arr) {
        if (arr[item]) result.push(arr[item]);
    }
    return result;
}

function filterBouncer(arr) {
    return arr.filter((item) => item)
}

console.log(bouncer([7, "ate", "", false, 9]));