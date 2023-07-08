function topKFrequent(words, k) {
  const wordCount = {};
  for (const word of words) {
    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  const sortedWords = Object.entries(wordCount).sort((a, b) => {
    const countComparison = b[1] - a[1];
    if (countComparison !== 0) {
      return countComparison;
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  const result = sortedWords.slice(0, k).map((entry) => entry[0]);
  return result;
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));