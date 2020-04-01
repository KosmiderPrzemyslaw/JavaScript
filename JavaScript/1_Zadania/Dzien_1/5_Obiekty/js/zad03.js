/*
#### Zadanie 3

1. Do obiektu `Car` z zadania 2 dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy).
   Dodaj ten nowy atrybut poza ciałem obiektu.
2. Dodaj też następujące metody:
   * metodę dodającą wpis do tej tablicy,
   * metodę wyświetlającą wszystkie przeglądy samochodu.
   Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

 */

const Car = function (brand, color) {
    this.brand = brand;
    this.color = color;
    this.km = 0;

    this.printCarInfo = function () {
        console.log(`Brand: ${this.brand}, color: ${this.color}, km: ${this.km}`)
    }
};
const opel = new Car("opel", "green");
opel.printCarInfo();

class ServisableCar extends Car {
    constructor(brand, type) {
        super(brand, type);
        this.services = [];
    }
    
    addService = function (service) {
        this.services.push(service)
    }
}

class WashCar extends Car {
    constructor(brand, color) {
        super(brand, color);
        this.wash = [];
    }
    
    washCar = function (washDate) {
        this.wash.push(washDate)
    }
}


ServisableCar.prototype.global = [];

const skodaOctavia = new ServisableCar("skoda", "red");
const hondaCivic = new ServisableCar("honda", "yellow");


skodaOctavia.addService("04-03-2020");
skodaOctavia.addService("07-07-2020");
skodaOctavia.addService("08-09-2020");

hondaCivic.addService("21-04-2020");

console.log(skodaOctavia.services);
console.log(hondaCivic.services);

console.log(skodaOctavia.hasOwnProperty('services'));
console.log(hondaCivic.hasOwnProperty('services'));
console.log(opel.hasOwnProperty('services'))

console.log(skodaOctavia.hasOwnProperty('global'))
console.log(hondaCivic.hasOwnProperty('global'))
console.log(opel.hasOwnProperty('global'))