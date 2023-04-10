// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers 
// (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based 
// on any combination of the formats provided above. The area code is required. 
// If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
    // Testa se a str tem caracteres não aceitos em um telefone
    if (/[^0-9\-()\s]/.test(str)) {
        return false;
    }

    //testa se tem algum parentese que n foi fechado ou aberto
    if (/\((?![^()]*\))|(?<!\([^()]*)\)/.test(str)) {
        return false;
    }

    const splited = str.split(/[\s-()]+/);

    if (splited.length !== 3 && splited.length !== 4
        && splited.length !== 1) {
        return false;
    }

    for (let i = 0; i < splited.length; i++) {
        if (splited.length === 1 && splited[0].length !== 10) return false;
        if (splited.length === 4 && Number(splited[0]) !== 1 && splited[0] !== '') {
            return false;
        }
        if (splited.length === 3) {
            if (i = splited.length - 1) {
                if (splited[i].length !== 4) {
                    return false;
                }
            } else {
                if (splited[i].length !== 3) {
                    return false;
                }
            }
        }
    }

    return true;
}

module.exports = telephoneCheck;
