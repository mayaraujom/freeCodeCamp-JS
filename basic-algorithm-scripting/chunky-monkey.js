// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let result = [];
    let lengthArr = arr.length;

    while (lengthArr > 0) {
        const removed = arr.splice(0, size);
        result.push(removed);
        lengthArr -= size;
    }

    return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);