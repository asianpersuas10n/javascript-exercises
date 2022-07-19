const leapYears = function(year) {
    if ((((year % 4) === 0) && ((year % 100) !== 0)) || ((year % 400) === 0)) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;
// if its divisable by 4 or 400 but not 100