// Question 1

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (nums.includes(diff)) {
      return [i, nums.indexOf(diff)];
    }
  }

  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

console.log(result);
