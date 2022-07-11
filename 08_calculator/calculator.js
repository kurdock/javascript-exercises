const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
    return array.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0)
};

const multiply = function(array) {
  return array.reduce((a,b) => {
    return a * b;
  }, 1)
};

const power = function(a,b) {
	if (b === 0) return 1;
  else return a * power(a,b-1); // power(2,3) returns 2 * power(2,2)
                                  // which is 2 * 2 * power(2,1)
                                  // which is 2 * 2 * 2 * power(2,0)
                                  // which is 2 * 2 * 2 * 1
                                  // Example of recursion!
};

const factorial = function(a) {
  if (a === 0) return 1;
	else return a * factorial(a-1) // factorial (5) returns 5 x factorial(4)
                                 // which returns 5 x 4 x factorial (3)
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
