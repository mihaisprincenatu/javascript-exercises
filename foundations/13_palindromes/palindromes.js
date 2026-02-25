const palindromes = function (str) {
  arr = str
    .toLowerCase()
    .split("")
    .filter((character) => (
      character >= "a" &&
      character <= "z" ||
      character >= "0" &&
      character <= "9"
    ))
  reversedArr = [...arr];
  reversedArr.reverse();
  str = arr.join("");
  reversedStr = reversedArr.join("");
  return str === reversedStr;  
};

// Do not edit below this line
module.exports = palindromes;
