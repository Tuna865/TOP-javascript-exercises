const add = function(x , y) {
	return x + y
};

const subtract = function(x , y) {
	return x - y
};

const sum = function(arr) {
  const arraySum = arr.reduce((total, num) => {
    return total + num
  }, 0)
  return arraySum
};

const multiply = function(array) {
  let product = 1
  for(let i = 0; i < array.length; i++){
    product *= array[i]
  }
  return product
}
const power = function(x , y) {
	return x ** y
};

const factorial = function(x) {
	if(x == 0 || x == 1){
    return 1
  }else {
    return x * factorial(x - 1)
  }
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
