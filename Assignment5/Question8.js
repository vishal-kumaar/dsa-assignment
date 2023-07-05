function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return []; // If the length is odd, it cannot be a valid doubled array
  }

  const original = [];
  const count = new Map();

  for (const num of changed) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  changed.sort((a, b) => a - b);

  for (const num of changed) {
    if (count.get(num) === 0) {
      continue;
    }

    if (count.get(num * 2) === undefined || count.get(num * 2) === 0) {
      return []; // Not a valid doubled array
    }

    original.push(num);
    count.set(num, count.get(num) - 1);
    count.set(num * 2, count.get(num * 2) - 1);
  }

  return original;
}

const changed = [1, 3, 4, 2, 6, 8];
const result = findOriginalArray(changed);
console.log(result);
