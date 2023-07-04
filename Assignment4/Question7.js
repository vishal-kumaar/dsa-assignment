function maxCount(m, n, ops) {
  let minX = m;
  let minY = n;

  for (const op of ops) {
    minX = Math.min(minX, op[0]);
    minY = Math.min(minY, op[1]);
  }

  return minX * minY;
}

const m = 3;
const n = 3;
const ops = [
  [2, 2],
  [3, 3],
];
const maxIntegers = maxCount(m, n, ops);
console.log(maxIntegers);
