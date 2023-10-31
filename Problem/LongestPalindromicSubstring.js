const longestPalindromicSubstring = (s) => {
  let start = 0;
  let end = 0;
  let left = 0;
  let right = 0;
  let len = 0;
  let longestString = 0;

  if (s.length <= 1) return s;

  for (let i = 0; i < s.length; i++) {
    left = i;
    right = i;
    while (left >= 0 && right < s.length) {
      if (s[left] == s[right]) {
        left--;
        right++;
      } else {
        break;
      }
    }
    len = right - left - 1;
    if (longestString < len) {
      longestString = len;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length) {
      if (s[left] == s[right]) {
        left--;
        right++;
      } else {
        break;
      }
    }
    len = right - left - 1;
    if (longestString < len) {
      longestString = len;
      start = left + 1;
    }
  }
  return s.substr(start, longestString);
};

let input = "babad";
const result = longestPalindromicSubstring(input);
console.log("Longest Palindromic Substring", result);
