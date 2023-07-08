function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (right - left + 1 > k) {
    if (arr[right] - x >= x - arr[left]) {
      right--;
    } else {
      left++;
    }
  }

  return arr.slice(left, right + 1);
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
