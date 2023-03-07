// Return an array consisting of the largest number from each provided sub-array. 

function largestNumber(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let largest;
        for (let j = 0; j < arr[i].length; j++) {
            if (!largest) largest = arr[i][j];
            if (arr[i][j] > largest) largest = arr[i][j];
        }
        result.push(largest);
    }
    return result;
}

console.log(largestNumber([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));