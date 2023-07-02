// Question 5

function mergeSort(array1, array2, m, n) {
  let k = 0;
  for (let i = 0; i < m + n; i++) {
    if ((array1[i] > array2[k])) {
        for (let j = m; j > i; j--){
            array1[j] = array1[j - 1];
        }
      array1[i] = array2[k];
      k++;
    }

    if (i >= m+k){
        array1[i] = array2[k];
        k++;
    }
  }
  return array1
}

const num1 = [1, 2, 3, 0, 0, 0];
const num2 = [2, 5, 6];
const m = 3;
const n = 3;
const result = mergeSort(num1, num2, m, n);
console.log(result);