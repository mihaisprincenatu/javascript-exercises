const repeatString = function(str, num) {
  if (num < 0) {
    return "ERROR";
  }
  else {
    let repeatStr = "";
    while (num > 0) {
      repeatStr = repeatStr.concat(str);
      num--;
    }
    return repeatStr;
  }
};

// Do not edit below this line
module.exports = repeatString;
