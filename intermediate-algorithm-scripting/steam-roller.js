//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(steamrollArray(arr[i]))
        } else {
            result.push(arr[i])
        }
    }

    return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));