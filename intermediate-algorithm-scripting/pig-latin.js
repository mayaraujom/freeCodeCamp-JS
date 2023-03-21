// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end 
// of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    const vogals = ['a', 'e', 'i', 'o', 'u'];

    if (vogals.includes(str[0])) {
        return str + 'way';
    } else {
        let strArr = str.split('');
        let index;

        for (let i = 0; i < strArr.length; i++) {
            if (vogals.includes(strArr[i])) {
                index = i;
                break;
            }
        }

        const spliced = strArr.splice(0, index);
        return strArr.join('') + spliced.join('') + 'ay';
    }

}

console.log(translatePigLatin("glove"));