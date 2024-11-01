const primeNumber = (num) => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log('2 a prime number', primeNumber(2))
console.log('5 a prime number', primeNumber(5))
console.log('9 a prime number', primeNumber(9))