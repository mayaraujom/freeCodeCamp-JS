// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string,
//  find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function definePair(str) {
    const pairs = {
        A: 'T',
        T: 'A',
        G: 'C',
        C: 'G'
    }

    return pairs[`${str}`];
}


function pairElement(str) {
    const strArray = str.split('');
    const result = [];

    for (let i = 0; i < strArray.length; i++) {
        result.push([strArray[i], definePair(strArray[i])]);
    }

    /* Outra solução: array.forEach
    strArray.forEach(element => result.push([element, definePair(element)]));
    */

    /* Outra solução: array.map
    const resultWithMap = strArray.map((element) => {return [element, definePair(element)]});
    return resultWithMap;    
    */
    
    return result;
}

console.log(pairElement("GCG"));