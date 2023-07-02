function isRepeated(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array.slice(i + 1, array.length).includes(array[i])) {
      return true;
    }
  }

  return false;
}

const nums = [1, 2, 3, 2];
const result = isRepeated(nums);
console.log(result);
