//A prime number is a positive integer that is divisible only by 1 and itself. For example: 2, 3, 5, 7, 11, 13, 17.
const checkPrime = (n) => {
  let isPrime = 1;
  if (n == 0 || n == 1) {
    isPrime = 0;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      console.log("first");
      isPrime = 0;
      break;
    }
  }

  if (isPrime) {
    console.log(`${n} IS PRIME NUMBER`);
  } else {
    console.log(`${n} IS NOT A PRIME NUMBER`);
  }
};

checkPrime(29);
