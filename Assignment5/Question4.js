function findDisjointArrays(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [[], []];

  for (const num of set1) {
    if (!set2.has(num)) {
      result[0].push(num);
    }
  }

  for (const num of set2) {
    if (!set1.has(num)) {
      result[1].push(num);
    }
  }

  return result;
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const result = findDisjointArrays(nums1, nums2);
console.log(result);
