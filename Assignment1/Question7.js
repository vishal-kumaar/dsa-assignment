function moveZeros(array) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[index] = array[i];
      index++;
    }
  }

  while (index < array.length) {
    array[index] = 0;
    index++;
  }

  return array;
}

const nums = [0, 1, 0, 3, 12];
const result = moveZeros(nums);
console.log(result);
