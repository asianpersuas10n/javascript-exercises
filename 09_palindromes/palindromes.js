const palindromes = function (str) {
    const correctedStr = str.toLowerCase().replace(/[^a-z]/g, "");
    return (correctedStr.split("").reverse().join("") == correctedStr);
};
console.log(palindromes("not a racecar"));
// Do not edit below this line
module.exports = palindromes;
