const factors = function (number) {
    const result = [];
    if(number <= 0) {
        return result;
    } else {
        for (let i = number; i >= 1; i--) {
            if (number % i === 0) {
                result.push(i);
            }
        }
    } return result;
};

console.log(factors(2));// => [2, 1]
console.log(factors(54));// => [54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(-4));// => []