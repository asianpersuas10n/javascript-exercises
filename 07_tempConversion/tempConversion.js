const ftoc = function(temp) {
  let newTemp = (temp - 32) * .5556;
  if (!Number.isInteger(newTemp)) {
    return Number(Number.parseFloat(newTemp).toFixed(1));
  } else {
    return newTemp;
  };

};

const ctof = function(temp) {
  let newTemp = (temp * 1.8) + 32;
  if (!Number.isInteger(newTemp)) {
    return Number(Number.parseFloat(newTemp).toFixed(1));
  } else{
    return newTemp;
  }

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
