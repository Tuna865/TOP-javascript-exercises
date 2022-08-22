const sumAll = function(x, y) {
    if(x < 0 || y < 0) 
        return "ERROR"
    if (!Number.isInteger(x) || !Number.isInteger(y)) 
        return "ERROR"
        
    const lowNum = Math.min(x,y)
    const highNum = Math.max(x,y)
    
    let sum = highNum * (highNum + 1) / 2 - (lowNum - 1) * (lowNum) / 2
    return sum
    
};

// Do not edit below this line
module.exports = sumAll;
