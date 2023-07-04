function maxCandies(candyType) {
  const candyCount = {};

  // Count the occurrences of each candy type
  for (let candy of candyType) {
    if (candyCount[candy] === undefined) {
      candyCount[candy] = 1;
    } else {
      candyCount[candy]++;
    }
  }

  // Calculate the maximum number of different types of candies Alice can eat
  const maxCandyTypes = Object.keys(candyCount).length;
  const maxAllowedCandies = candyType.length / 2;

  return Math.min(maxCandyTypes, maxAllowedCandies)
}

const candyType = [1, 1, 2, 2, 3, 3];
const result = maxCandies(candyType);
console.log(result);