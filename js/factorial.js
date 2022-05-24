exports.factorial = function (num) {
  if (num == 1) {
    return 1;
  }
  return num * this.factorial(num - 1);
};
