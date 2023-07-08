function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count++;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    }
    if (count > nums.length / 2) {
      return candidate;
    }
  }

  return null;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
