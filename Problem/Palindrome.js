const IsPalindrome = (x) => {
  let number = x;
  let reverse = 0;

  while (number > 0) {
    reverse = 10 * reverse + (number % 10);
    number = parseInt(number / 10);
  }
  return x == reverse;
};

const x = 121;
console.log("IS Palindrome", IsPalindrome(x) ? "Yes" : "No");
