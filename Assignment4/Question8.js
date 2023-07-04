function shuffleArray(nums, n) {
  const shuffledArray = [];

  for (let i = 0; i < n; i++) {
    shuffledArray.push(nums[i], nums[i + n]);
  }

  return shuffledArray;
}

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const shuffled = shuffleArray(nums, n);
console.log(shuffled);
