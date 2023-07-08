function romanToInt(s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentSymbolValue = romanValues[s[i]];
    const nextSymbolValue = romanValues[s[i + 1]];

    if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++;
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
