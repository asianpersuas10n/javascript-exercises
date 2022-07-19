const removeFromArray = function(arr, ...remove) {
    let newArr = arr;
    for (let j = 0; j <= remove.length; j++) {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === remove[j]) {
                newArr.splice(i, 1);
            }
        }
    };
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
