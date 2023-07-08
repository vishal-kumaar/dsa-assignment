function nthUglyNumber(n) {
  const ugly = [1];
  let p2 = 0,
    p3 = 0,
    p5 = 0;

  for (let i = 1; i < n; i++) {
    const nextUgly = Math.min(ugly[p2] * 2, ugly[p3] * 3, ugly[p5] * 5);
    ugly[i] = nextUgly;

    if (nextUgly === ugly[p2] * 2) {
      p2++;
    }
    if (nextUgly === ugly[p3] * 3) {
      p3++;
    }
    if (nextUgly === ugly[p5] * 5) {
      p5++;
    }
  }

  return ugly[n - 1];
}

console.log(nthUglyNumber(10));
console.log(nthUglyNumber(1));
