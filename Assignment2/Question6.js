function binarySearch(array, target) {
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const result = binarySearch(nums, target);
console.log(result);
