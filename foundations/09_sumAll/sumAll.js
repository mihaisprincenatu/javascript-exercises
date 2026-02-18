const sumAll = function(a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    a < 0 ||
    b < 0 ||
    a % 1 !== 0 ||
    b % 1 !== 0
  ) {
    return "ERROR";
  }
  if (a > b) {
    [a, b] = [b, a];
  }
  // return b*(b+1)/2 - (a-1)*a/2;
  arrayFromAToB = [];
  for (let i=a; i<=b; i++) {
    arrayFromAToB.push(i);
  }
  return arrayFromAToB.reduce((sum, num) => sum + num, 0);
};

// Do not edit below this line
module.exports = sumAll;
