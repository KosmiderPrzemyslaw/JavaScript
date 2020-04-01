const arrayCheck = function(array2D) {
    const result = [];
    for (let i = 0; i < array2D.length; ++i) {
        let isEven = true;
        for (let j = 0; j < array2D[i].length; ++j) {
            if (array2D[i][j] % 2 !== 0) {
                isEven = false;
                break;
            }
        }
        result.push(isEven);
    }
    return result;
};
const arr = [];
arr[0] = [3, 4, 56, 773, 1];
arr[1] = [7, 12, 0, 98, 34, 381];
arr[2] = [12, 66, 96, 54, 10];
console.log(arrayCheck(arr));
//output ->
// arrayCheck[0];//ma mieć wartość false
// arrayCheck[1];//ma mieć wartość false
// arrayCheck[2];//ma mieć wartość true

