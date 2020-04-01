var nums = [5, 2, 20, 19, 4];
nums.sort();
console.log(nums);//[19, 2, 20, 4, 5] Domyślnie tablica z liczbami jest sortowana jak
// by były to napisy

var nums = [5, 2, 20, 19, 4];
nums.sort(function(a, b){
    return a - b;
});
console.log(nums);//[2, 4, 5, 19, 20]
// Przekazujemy funkcję jako argument, która
// zgodnie z dokumentacja pozwoli nam
// posortować odpowiednio liczby

console.log("Start");
var timeout  = setTimeout(function () {
    console.log('I ll be invoked in 5s');
}, 5000);
console.log("End");