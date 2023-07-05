function convertTo2DArray(original, m, n) {
  const length = original.length;
  if (length !== m * n) {
    return [];
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    result.push(original.slice(i * n, (i + 1) * n));
  }

  return result;
}

const original = [1, 2, 3, 4];
const m = 2;
const n = 2;
const result = convertTo2DArray(original, m, n);
console.log(result);
