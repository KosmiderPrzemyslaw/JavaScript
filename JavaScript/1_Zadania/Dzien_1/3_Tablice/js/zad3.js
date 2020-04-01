function distFromAverage(array) {
    let sum = 0;
    const tab = [];
    let avg;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = sum / array.length;
    for(let i = 0; i < array.length; i++) {
        const distance = Math.abs(array[i] - avg);
        tab.push(distance);
    }
    return tab;
}

console.log(distFromAverage([1, 2, 3, 4, 5, 6, 7]));// => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
console.log(distFromAverage([1, 1, 1, 1]));// => [0,0,0,0] (średnia z tablicy wejściowej to 1)
console.log(distFromAverage([2, 8, 3, 7]));// => [3,3,2,2] (średnia z tablicy wejściowej to 5)