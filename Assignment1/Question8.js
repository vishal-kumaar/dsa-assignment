function findMissingNum(array){
   for (let i = 0; i < array.length - 1; i++){
    if (array[i] === array[i+1]){
        return [array[i], array[i]+1];
    }
   }
   return [];
}

const nums = [1, 2, 2, 4];
const result = findMissingNum(nums);
console.log(result);