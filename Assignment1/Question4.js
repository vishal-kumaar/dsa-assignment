function addOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);

    if (carry === 0) {
      break;
    }
  }

  return digits;
}

const digits = [1, 2, 3];
const result = addOne(digits);
console.log(result);
