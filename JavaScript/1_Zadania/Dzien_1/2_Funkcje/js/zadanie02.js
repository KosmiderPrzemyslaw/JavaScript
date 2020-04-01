// #### Zadanie 2 - rozwiązywane z wykładowcą

// 1. W pliku `zadanie02.js` stwórz funkcję liczącą pole i obwód okręgu.
// 2. Funkcja przyjmuje promień tej figury geometrycznej jako argument.
// 3. Jeśli przekazany argument jest nieodpowiedniego typu, to funkcja ma zwrócić `false`.

// Zadanie rozwiąż w tym samym pliku.

var calculateAreaAndPerimeter = function (radius) {
    if (typeof radius !== 'number') {
        return false
    }
    var area = Math.PI * Math.pow(radius, 2)
    var perimeter = Math.PI * 2 * radius
    return `Radius: ${radius}, area: ${area}, perimiter: ${perimeter}`
}
console.log(calculateAreaAndPerimeter(3))
console.log(calculateAreaAndPerimeter("text"));


var caluculateRectangle = function (a, b) {
    if (typeof 'a' || 'b' !== 'number') {
        return false
    }
    var area = a * b;
    var circut = 2 * a + 2 * b;
    return `Area: ${area}, Circut: ${circut}`;
}
console.log(caluculateRectangle(2, 4));
console.log(caluculateRectangle("ds", "2"));


const calculateTriangle = function (a, h) {
    let area;
    if (typeof a || h !== 'number') {
        return false
    } else {
        area = (a * h) / 2;
        return `Area : ${area}`
    }

}

console.log(calculateTriangle(4, 2));



