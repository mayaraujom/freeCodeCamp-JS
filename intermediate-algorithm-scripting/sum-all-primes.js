// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. 
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function checkIfPrime(num) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}


function sumPrimes(num) {
    if (num < 2) {
        return 'Utilize um número inteiro positivo maior que 1';
    }

    let sum = 0;

    for (let i = 2; i <= num; i++) {
        if (checkIfPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumPrimes(1));