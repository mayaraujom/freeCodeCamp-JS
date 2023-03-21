// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. 
// For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


function myReplace(str, before, after) {
    const strArr = str.split(' ');
    const index = strArr.indexOf(before);
    const isUpperCase = /[A-Z]/.test(before);
    const afterArray = after.split('');

    if (isUpperCase) {
        afterArray.splice(0, 1, afterArray[0].toUpperCase());
    }

    if (!isUpperCase) {
        afterArray.splice(0, 1, afterArray[0].toLowerCase());
    }

    strArr.splice(index, 1, afterArray.join(''));

    return strArr.join(' ');
}

console.log(myReplace("His name is Tom", "Tom", "john"));