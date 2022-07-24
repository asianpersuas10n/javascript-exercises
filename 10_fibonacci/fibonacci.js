const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let fib = 1;
    let fib2 = 1;
    let fib3 = 0;
    if (num <= 2) {
        return 1;
    } else {
        for (let i = 3; i <= num; i++) {
            fib3 = fib;
            fib = fib + fib2;
            fib2 = fib3;
        };
        return fib;
    };
};
console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
