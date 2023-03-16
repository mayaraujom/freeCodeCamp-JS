// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function percorreArray(arr1, arr2) {
    const newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        const numberToCompare = arr1[i];
        let hasNumber = false;
        for (let j = 0; j < arr2.length; j++) {
            if (numberToCompare === arr2[j]) {
                hasNumber = true;
            }
        }
        if (!hasNumber) {
            newArr.push(numberToCompare)
        }
    }

    return newArr;
}

function diffArray(arr1, arr2) {
    const retornoArr1 = percorreArray(arr1, arr2);
    const retornoArr2 = percorreArray(arr2, arr1);
    
    const newArr = [...retornoArr1, ...retornoArr2];

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));