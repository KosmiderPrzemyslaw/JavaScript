String.prototype.upperLower = function () {
    var result = "";
    var char = "";

    for (var i = 0; i < this.length; i++) {
        char = this.charAt(i);

        if (i % 2 === 0) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
};
String.prototype.lowerUpper = function () {
    var result = "";
    var char = "";

    for (var i = 0; i < this.length; i++) {
        char = this.charAt(i);

        if (i % 2 === 0) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }


    }
    return result;
}

console.log("Javascript jest super".upperLower());
console.log("Javascript jest super".lowerUpper());
var Car = function (make, color, km) {
    this.make = make;
    this.color = color;
    this.km = km;
};

var stilo = Car("run", "white", " 100");

var Player = function (name, position, age) {
    this.name = name;
    this.position = position;
    this.age = age;
};

Player.prototype.meeting = [];

Player.prototype.addMeeting = function (date) {
    this.meeting.push(date);
}
Player.prototype.years = function (years) {
    this.age += years;
}
Player.prototype.printPlayerInfo = function () {
    console.log("Name: " + this.name + ", Position: " + this.position + ", Age: " + this.age);
};

var Client = function (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
};

Client.prototype.clients = [];

Client.prototype.addClients = function (Client) {
    this.clients.forEach(function (value) {
        value = new Client();
        this.clients.push(value);
    })
};


Player.prototype.printMeetings = function () {
    this.meeting.forEach(function (value) {
        console.log("Spotkanie: " + value);
    })
};

Car.prototype.services = [];

Car.prototype.addService = function (date) {
    this.services.push(date);
};

Car.prototype.drive = function (km) {
    this.km += km;

};

Car.prototype.printCarInfo = function () {
    console.log("Marka: " + this.make + ", Kolor: " + this.color + ", Przebieg: " + this.km + "km");

};

Car.prototype.printServices = function () {
    this.services.forEach(function (element) {
        console.log("Przeglad: " + element);
    })

};


var honda = new Car("Honda", "grey", 68500);
honda.drive(1400);
honda.addService("2017-05-25");
honda.addService("2018-09-25");
honda.addService("2019-10-25");
honda.printCarInfo();
honda.printServices();

var kosmokillah = new Player("kosmo", "striker", 28);
kosmokillah.years(2);
kosmokillah.addMeeting("2019-09-25");
kosmokillah.addMeeting("2019-09-26");
kosmokillah.addMeeting("2019-09-27");
kosmokillah.printPlayerInfo();
kosmokillah.printMeetings();

var ziomek = new Client("ziomek", "poziomek", 23);

ziomek.addClients(ziomek);

const Rectangle = function (a, b) {
    this.a = a;
    this.b = b;
};

Rectangle.prototype.getArea = function () {
    return this.a * this.b;
};

Rectangle.prototype.getPerimeter = function () {
    return 2 * this.a + 2 * this.b;
};

