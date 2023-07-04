function arrangeCoins(n) {
    let rowCount = 0;

    while (n >= rowCount + 1) {
        rowCount++;
        n -= rowCount;
    }

    return rowCount;
}

const n = 5;
const completeRows = arrangeCoins(n);
console.log(completeRows);
