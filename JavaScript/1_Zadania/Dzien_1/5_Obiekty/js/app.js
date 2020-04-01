String.prototype.upperLower = function () {
    let result = "";
    let idx = 0;

    for (let i = 0; i < this.length; i++) {
        const character = this.charAt(i);
        if (character === "/s") {
            result += character;
            continue;
        }
        result += (idx++ % 2 !== 0) ? character.toUpperCase() : character.toLowerCase();

        // if (idx++ % 2 !== 0) {
        //     result += character.toUpperCase()
        // } else {
        //     result += character.toLowerCase()
        // }
    }
    return result
};
console.log("Smiesznie".toLowerCase());
console.log("JavaScript jest super".upperLower());

const Car = function (brand, color) {
    this.brand = brand;
    this.color = color;
    this.km = 0;

    this.printCarInfo = function () {
        console.log(`Brand: ${this.brand} Color: ${this.color} Km: ${this.km}`)
    }


};

var opel = new Car("opel", "white");
opel.printCarInfo();

//drugi sposób

Car.prototype.drive = function (km) {
    this.km += km;
};

opel.drive(10);
opel.drive(100);
opel.printCarInfo();


let teacher = {
    name: "Janusz",
    surname: "Kowalski",
    subject: "Proramowanie w js",
    teach: function () {
        return "Uczę programowania";

    },
    aboutMe: function () {
        console.log(this.name);
        console.log(this.surname);
        console.log(this.subject);
    },
};

console.log(teacher.aboutMe());
console.log(teacher.students); //i
teacher.students = ["Ala", "Jan", "Ada"];
console.log(teacher.students);

var Auto = function (type, hp, color) {
    this.type = type;
    this.hp = hp;
    this.color = color;
    this.km = 0;
};
var bmw = new Auto("bmw", 125, "blue");
console.log(bmw.type);
console.log(bmw.hp);
console.log(bmw.color)

Car.prototype.go = function (km) {
    console.log(this.color + " " + this.type + " drives for " + km + "km");
    this.km += km;
};

var mercedes = new Car("Mercedes", 120, "black");

console.log(mercedes.go(60));
//zad 3



