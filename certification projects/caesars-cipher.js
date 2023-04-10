// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by 
// some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decoded = ''

    for (let i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
            const index = alphabet.indexOf(str[i])
            if (index - 13 < 0) {
                let indice = index;
                let ROT = 13;
                while (indice >= 0) {
                    indice--;
                    ROT--;
                }
                decoded += alphabet[25 - ROT];
            } else {
                decoded += alphabet[index - 13];
            }
        }
        else decoded += str[i]
    }

    return decoded;
}

module.exports = rot13;
