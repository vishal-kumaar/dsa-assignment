function harmoniousArray(array) {
    const uniqueArr = [];
    const arrayOfArr = [];

    for (let val of array) {
        if (!uniqueArr.includes(val)) {
            uniqueArr.push(val);
        }
    }

    uniqueArr.sort((a, b) => a - b)

    for (let i = 0; i < uniqueArr.length - 1; i++) {
        const tempArr = [];
        const current = uniqueArr[i];
        const next = uniqueArr[i + 1];
        if ((next - current) === 1) {
            for (let num of array) {
                if ([current, next].includes(num)) {
                    tempArr.push(num);
                }
            }
            arrayOfArr.push(tempArr);
        }
    }

    if (arrayOfArr.length > 0){
        return arrayOfArr.sort((a, b) => b.length - a.length)[0];
    }

    return [];
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const result = harmoniousArray(nums);
console.log(result);