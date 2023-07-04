function maximumProduct(nums) {
    const length = nums.length;

    if (length < 3) {
        return null
    }

    nums.sort((a, b) => b - a);
    let product = 1;

    for (let i = 0; i < 3; i++) {
        product *= nums[i];
    }

    return product;
}

const nums = [1,2,3]
console.log(maximumProduct(nums));