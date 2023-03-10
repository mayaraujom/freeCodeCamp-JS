// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    let splited = str.split(' ');
    let newStr = [];
    for (let i = 0; i < splited.length; i++) {
        const word = []
        for (let j = 0; j < splited[i].length; j++) {            
            j === 0 ?  word.push(splited[i][j].toUpperCase()) : word.push(splited[i][j].toLowerCase());
        }
        newStr.push(word.join(''))
    }
    return newStr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));