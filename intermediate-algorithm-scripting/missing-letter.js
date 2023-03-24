// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    const alphab = "abcdefghijklmnopqrstuvwxyz";
    if (str === alphab) return undefined;

    let splitedAlphab = alphab.split('');

    const indexFirst = alphab.indexOf(str[0]);
    const indexLast = alphab.indexOf(str[str.length - 1]);
    const intervalo = splitedAlphab.splice(indexFirst, indexLast + 1);

    const splitedStr = str.split('')
    let missingLetter;

    for (let i = 0; i < intervalo.length; i++) {
        if (!splitedStr.includes(intervalo[i])) {
            missingLetter = intervalo[i];
            break;
        }
    }

    return missingLetter;
}

console.log(fearNotLetter("stvwx"));