var teacher = {
    name: "Janusz",
    surname: "Kowalski",
    subject: "Programowanie JS",
    teach: function () {
        return "Ucze programowania";
    }
};

var dog = {
    name: "fafik",
    surname: "kolonko",
    bark: function () {
        return "how how"
    },
    aboutDog: function () {
        console.log(this.name);
        console.log(this.surname);
        console.log(this.bark());
    }
};

console.log(dog.bark());

dog.aboutDog();
const Cat = function (color, name) {
    this.color = color,
        this.name = name,

        this.printCatinfo = function () {
            console.log(`Name: ${this.name}, Color: ${this.color}`)
        }

}


var filemon = new Cat("black", "filemon");
filemon.printCatinfo();

filemon.tests = [];
filemon.addTest = function (date) {
    this.tests.push(date)
}
filemon.addTest("21-03-20")
console.log(filemon.tests)

Cat.prototype.giveVoice = function () {
    console.log("miaaaau");
}

filemon.giveVoice();


const Car = function (brand, color) {
    this.brand = brand,
        this.color = color,
        this.km = 0,

        this.printCarInfo = function () {
            console.log(`Brand: ${this.brand}, Color: ${this.color}, Km: ${this.km}`)
        }
}


let opel = new Car("opel", "white")
opel.printCarInfo()

let skoda = new Car("skoda", "black")
skoda.printCarInfo();

Car.prototype.drive = function (km) {
    this.km += km;
}

opel.drive(10)
opel.printCarInfo();

//dodawanie tylko do obiektu:
opel.services = [];
opel.addService = function (service) {
    this.services.push(service)
}
opel.addService("22-02-2020")
console.log(opel.services)
// nie zadziała dla innych obiektów tej samej klasy
// skoda.addService("20-01.2020")
// console.log(skoda.services)

Car.prototype.services = [];
Car.prototype.addService = function (service) {
    this.services.push(service)
}
opel.addService("12-12-20")
opel.addService("12-08-21")
console.log(opel.services)

const skodaFabia = new Car("skoda", "blue")
skoda.addService("11-04-20")
skoda.addService("10-07-20")
skoda.addService("11-12-20")
console.log(skodaFabia.services)

console.log(opel.hasOwnProperty('brand'))
console.log(skodaFabia.hasOwnProperty('brand'))

console.log(opel.hasOwnProperty('services'))
console.log(skodaFabia.hasOwnProperty('services'))