const factorial = (num) => {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact = i * fact
    }
    return fact;
}

console.log('Fabonacci Sequence Of 2 is', factorial(2))
console.log('Fabonacci Sequence Of 3 is', factorial(3))
console.log('Fabonacci Sequence Of 5 is', factorial(5))
console.log('Fabonacci Sequence Of 9 is', factorial(9))