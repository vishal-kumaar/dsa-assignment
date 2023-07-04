function canPlaceFlowers(flowerbed, n) {
    let flowersCount = 0;
    const len = flowerbed.length;

    let zeros = 1;
    for (let i = 0; i < len; i++) {
        if (flowerbed[i] === 0) {
            zeros++;
        } else {
            flowersCount += Math.floor((zeros - 1) / 2);
            zeros = 0;
        }
    }

    if (zeros > 0) {
        flowersCount += Math.floor(zeros / 2);
    }

    return flowersCount ;
}

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const result = canPlaceFlowers(flowerbed, n);
console.log(result)