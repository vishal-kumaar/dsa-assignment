function minimumScore(nums, k) {
  const n = nums.length;
  let minScore = Infinity;

  for (let x = -k; x <= k; x++) {
    const modifiedNums = nums.map((num) => num + x);
    const maxNum = Math.max(...modifiedNums);
    const minNum = Math.min(...modifiedNums);
    const score = maxNum - minNum;
    minScore = Math.min(minScore, score);
  }

  return minScore;
}

const nums = [1];
const k = 0;
console.log(minimumScore(nums, k));
