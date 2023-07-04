function sortedSquares(nums) {
  const squaredNums = nums.map((num) => num * num);
  squaredNums.sort((a, b) => a - b);
  return squaredNums;
}

const nums = [-4, -1, 0, 3, 10];
const result = sortedSquares(nums);
console.log(result);
