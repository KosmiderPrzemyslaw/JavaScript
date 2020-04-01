function canCreateTriangle(a, b, c) {
    // Do liczb odwołuj się przez zmienne a, b i c.
    // Pamiętaj o zwróceniu poprawnych danych (return true albo return false).

    return a + b > c && c + b > a && a + c > b;
}


console.log("z liczb 5, 6, 4 można stworzyć trójkąt (powinno zwrócić true) " + canCreateTriangle(5, 6, 4));
console.log("z liczb 100, 3, 6 nie można stworzyć trójkąta (powinno zwrócić false) " + canCreateTriangle(100, 3, 6));
console.log("z liczb 12, 14, 9 można stworzyć trójkąt (powinno zwrócić true) " + canCreateTriangle(12, 14, 9));
console.log("z liczb 3, 6, 200 nie można stworzyć trójkąta (powinno zwrócić false) " + canCreateTriangle(3, 6, 200));
console.log("z liczb 65, 53, 74 można stworzyć trójkąt (powinno zwrócić true) " + canCreateTriangle(65, 53, 74));
console.log("z liczb 600, 800, 1 nie można stworzyć trójkąta (powinno zwrócić false) " + canCreateTriangle(600, 800, 1));


// #### Zadanie 4

// Zajrzyj do pliku `zadanie04.js`.  
// Jest tam napisany szkielet funkcji przyjmującej trzy liczby.  
// 1. Dopisz ciało funkcji tak, żeby zwracać ```true``` (wartość logiczną), jeżeli z podanych
// liczb można stworzyć trójkąt,
//    a ```false``` jeżeli nie.
// 2. Tę figurę geometryczną można zbudować z trzech linii tylko wtedy, gdy suma długości dwóch
// z nich jest większa niż długość trzeciej linii, czyli:

//    ```JavaScript
//    a + b > c
//    c + b > a
//    a + c > b
//    ```