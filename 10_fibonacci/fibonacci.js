const fibonacci = function(x) {
    if(x < 0){
        return "OOPS"
    }
    return x < 1 ? 0 : x <= 2 ? 1 : fibonacci(x - 1) + fibonacci(x - 2)
};

// Do not edit below this line
module.exports = fibonacci;
