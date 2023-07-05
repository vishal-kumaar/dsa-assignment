function sortedSquares(nums) {
  const n = nums.length;
  let result = new Array(n);
  let left = 0;
  let right = n - 1;
  let index = n - 1;

  while (left <= right) {
    const leftSquared = nums[left] * nums[left];
    const rightSquared = nums[right] * nums[right];

    if (leftSquared > rightSquared) {
      result[index] = leftSquared;
      left++;
    } else {
      result[index] = rightSquared;
      right--;
    }

    index--;
  }

  return result;
}

const nums = [-4,-1,0,3,10];
const result = sortedSquares(nums);
console.log(result);