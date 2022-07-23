const add = function(...sum) {
	let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total += sum[i];
  };
  return total;
};

const subtract = function(num, num2) {
  let total = num - num2;
  return total;
};

const sum = function(sum) {
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total += sum[i];
  };
  return total;
};

const multiply = function(mult) {
  let total = mult[0];
  for (let i = 1; i < mult.length; i++) {
    total *= mult[i];
  };
  return total;
};

const power = function(num, power) {
	let total = num;
  for (let i = 1; i <= power - 1; i++) {
    total *= num;
  };
  return total;
};

const factorial = function(num) {
  let total =  num;
  for (let i = 1; i < num; i++) {
    total *= (num - i);
  };
  if (num === 0) return 1;
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
