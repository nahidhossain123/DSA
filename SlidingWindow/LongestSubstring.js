const LongestSubstring = () => {
  if (!s) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let maxString = 0;
  const LargestStrings = new Set();
  while (end < s.length) {
    if (LargestStrings.has(s[end])) {
      LargestStrings.delete(s[start]);
      start++;
    } else {
      LargestStrings.add(s[end]);
      end++;
      maxString = Math.max(LargestStrings.size, maxString);
    }
  }
  return maxString;
};

s = "abcabcbb";

console.log("Longest Substring", LongestSubstring(s));
