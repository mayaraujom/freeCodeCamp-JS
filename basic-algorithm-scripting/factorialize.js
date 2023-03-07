// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or
// equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    if (num < 0 || !Number.isInteger(num)) return 'Número deve ser inteiro e maior que 0';

    if (num === 1) return 1;

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorialize(5));