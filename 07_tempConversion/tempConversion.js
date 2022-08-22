
/*

°F = °C × 9⁄5 + 32
°C = (°F − 32) × 5⁄9
*/ 

const ftoc = function(temp) {
  let fahrenheit = (temp - 32) * (5/9)
  
  return Math.round(fahrenheit * 10) / 10
};

const ctof = function(temp) {
  celsius = temp * (9/5) + 32

  return Math.round(celsius * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
