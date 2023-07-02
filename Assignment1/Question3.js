// Question 3

function binarySearch(nums, target) {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    const mid = Math.floor((first + last) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return -1;
}

const nums = [1, 3, 5, 6];
const target = 5;

const result = binarySearch(nums, target);
console.log(result);
