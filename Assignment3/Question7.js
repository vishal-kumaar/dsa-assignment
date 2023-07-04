function findMissingRanges(nums, lower, upper) {
  const ranges = [];

  const addRange = (start, end) => {
    ranges.push([start, end]);
  };

  if (lower < nums[0]) {
    addRange(lower, nums[0] - 1);
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      addRange(nums[i - 1] + 1, nums[i] - 1);
    }
  }

  if (upper > nums[nums.length - 1]) {
    addRange(nums[nums.length - 1] + 1, upper);
  }

  return ranges;
}

const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
const result = findMissingRanges(nums, lower, upper);
console.log(result);
