const sumAll = function(numOne, numTwo) {
    if (((numTwo | numOne) < 0) || (!Number.isInteger(numTwo)) || (!Number.isInteger(numOne))) {
        return "ERROR";
    };
    let numArr = [numOne, numTwo];
    let sum = 0;
    numArr.sort(function(a, b){return a - b});
    for (i = numArr[0]; i <= numArr[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
