function lengthOfLongestSubstring(s) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let visited = new Set();

  while (end < s.length) {
    if (!visited.has(s[end])) {
      visited.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, end - start);
    } else {
      visited.delete(s[start]);
      start++;
    }
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
