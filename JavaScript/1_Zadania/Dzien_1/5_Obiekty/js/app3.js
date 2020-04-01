/*
#### Zadanie 4

1. W pliku `zadanie04.js` możesz znaleźć przykładowy konstruktor dla robota.
2. Konstruktor oczekuje, że podasz tylko imię robota.
3. Wszystkie roboty mają od razu kilka metod (metody dodane są przez prototypy).
4. Utwórz kilka robotów i sprawdź, czy w napisanym kodzie nie ma błędów.
 */
var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
};

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newName) {
    console.log("Robot " + this.name + " changes name to " + newName);
    this.name = newName;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var robot1 = new Robot("Robot 1");
var robot2 = new Robot("Robot 2");
var robot3 = new Robot("Robot 3");

robot1.sayHi("Robot 2");
robot2.changeName("Super robot");
robot3.fixIt();
robot1.fixIt();
robot1.sayHi("Robot 2");