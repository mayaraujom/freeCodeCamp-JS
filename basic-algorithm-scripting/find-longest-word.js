// Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWordLength(str) {
    const strToArray = str.split(' ');
    let longest = 0;
    for (let i = 0; i < strToArray.length; i++) {
        if (strToArray[i].length > longest) longest = strToArray[i].length;
    }
    return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));