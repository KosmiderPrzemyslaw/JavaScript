const currentYear = 2020;
const calc = function(array) {
    let minYear;
    let maxYear;
    while (true) {
        year = array.pop();
        if (year === undefined) {
            break;
        }
        if (minYear === undefined) {
            minYear = year;
        }
        if (maxYear === undefined) {
            maxYear = year;
        }
        if (year < minYear) {
            minYear = year;
        }
        if (year > maxYear) {
            maxYear = year;
        }
    }
    console.log(`Oldest: ${minYear}, ${currentYear - minYear}`);
    console.log(`Youngest: ${maxYear}, ${currentYear - maxYear}`);
};
const arr = [1982, 1988, 1985];
calc(arr);