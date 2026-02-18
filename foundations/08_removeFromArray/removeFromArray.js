const removeFromArray = function(arr, ...nums) {
  for (const num of nums) {
    while(arr.indexOf(num) !== -1) {
      arr.splice(arr.indexOf(num), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
