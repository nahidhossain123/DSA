const fabonacciSequence = (num) => {
    let fab = [0, 1]
    for (let i = 2; i < num; i++) {
        fab[i] = fab[i - 1] + fab[i - 2]
    }
    return fab;
}

console.log('Fabonacci Sequence Of 2 is', fabonacciSequence(2))
console.log('Fabonacci Sequence Of 3 is', fabonacciSequence(3))
console.log('Fabonacci Sequence Of 9 is', fabonacciSequence(9))