function groupAnagrams(strs) {
  const anagramGroups = {};

  for (const word of strs) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagramGroups) {
      anagramGroups[sortedWord].push(word);
    } else {
      anagramGroups[sortedWord] = [word];
    }
  }

  return Object.values(anagramGroups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log(groupAnagrams([""]));

console.log(groupAnagrams(["a"]));
