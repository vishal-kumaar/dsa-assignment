function findDisjointNumbers(nums1, nums2) {
    const distinctNums1 = nums1.filter(num => !nums2.includes(num));
    const distinctNums2 = nums2.filter(num => !nums1.includes(num));
    return [distinctNums1, distinctNums2];
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const result = findDisjointNumbers(nums1, nums2);
console.log(result);
