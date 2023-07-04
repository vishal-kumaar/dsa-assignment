function isMonotonic(array){
    let isIncreasing = true;
    let isNonIncreasing = true;

    for (let i = 0 ; i < array.length - 1; i++){
        if (array[i] > array[i + 1]){
            isIncreasing = false;
        }

        if (array[i] < array[i + 1]){
            isNonIncreasing = false;
        }
    }
    
    return isIncreasing || isNonIncreasing;
}

const nums = [1,2,2,3];
const result = isMonotonic(nums);
console.log(result)