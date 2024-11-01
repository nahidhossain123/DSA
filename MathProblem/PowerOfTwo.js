const powerOfTwo = (num) => {
    if (num < 1) {
        return false
    }
    while (num % 2 == 0) {
        num = num / 2
    }
    return num == 1
}

console.log('Is 2 power of two', powerOfTwo(2))
console.log('Is 3 power of two', powerOfTwo(3))
console.log('Is 16 power of two', powerOfTwo(16))
console.log('Is 9 power of two', powerOfTwo(9))