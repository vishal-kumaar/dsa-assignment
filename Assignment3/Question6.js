function singleNumber(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
}

const nums = [2, 2, 1];
const result = singleNumber(nums);
console.log(result);
