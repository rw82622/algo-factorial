exports.factorial = function (num) {
  let sum = num;
  for (let i = num; i > 1; i--) {
    sum *= i - 1;
  }
  return sum;
};
