// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return
//  the truncated string with a ... ending.

function truncateString(str, num) {
    let splited = str.split('');
    if (splited.length <= num) return str;

    const dif = splited.length - num;
    splited.splice(num, dif)

    return splited.join('') + "...";
}

console.log(truncateString("A-", 1));