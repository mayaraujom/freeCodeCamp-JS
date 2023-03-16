// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
    const args = [...arguments];
    let array = args[0];
    let arrayMutavel = [...array];
    const toDestroy = args.slice(1);

    for (let i = 0; i < array.length; i++) {
        const numberToCompare = array[i];
        let hasToGo = false;
        for (let j = 0; j < toDestroy.length; j++) {
            if (numberToCompare === toDestroy[j]) {
                hasToGo = true;
            }
        }
        if (hasToGo) {
            const index = arrayMutavel.findIndex((num) => num === numberToCompare)
            arrayMutavel.splice(index, 1)
        }
    }

    return arrayMutavel;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));