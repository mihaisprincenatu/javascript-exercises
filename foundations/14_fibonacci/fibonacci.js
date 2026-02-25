const fibonacci = function(nth_member) {
  if (+nth_member < 0) {
    return "OOPS";
  }
  if (+nth_member === 0) {
    return 0;
  }
  if (+nth_member === 1) {
    return 1;
  }
  //return (fibonacci(+nth_member - 1) + fibonacci(+nth_member - 2));
  let prevPrevValue = 0;
  let prevValue = 1;
  let value
  for (let member = 2; member <= +nth_member; member++) {
    value = prevValue + prevPrevValue;
    prevPrevValue = prevValue;
    prevValue = value;
  }
  return value;
};

// Do not edit below this line
module.exports = fibonacci;
