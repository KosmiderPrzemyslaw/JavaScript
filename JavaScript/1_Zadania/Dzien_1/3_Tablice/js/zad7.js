const getMissingElement = function (array) {
    let missingElement = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] > 1) {
            missingElement = array[i] + 1;
        }
    }
    return missingElement;
};

console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));// => null
console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));// => 9
console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));// => -1