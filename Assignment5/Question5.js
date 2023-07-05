function calculateDistanceValue(arr1, arr2, d) {
  let distance = 0;

  for (let i = 0; i < arr1.length; i++) {
    let found = false;

    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        found = true;
        break;
      }
    }

    if (!found) {
      distance++;
    }
  }

  return distance;
}

const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;
const result = calculateDistanceValue(arr1, arr2, d);
console.log(result);
