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
    if(!this.isFunctional) {
        console.log("Robot " + this.name + "is broken");
        return;
    }
    console.log("Robot " + this.name + " greets " + toWho)
};

Robot.prototype.changeName = function (newName) {
    console.log("Robot " + this.name + " change name to " + newName);
    this.name = newName;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

Robot.prototype.breakIt = function () {
    this.isFunctional = false;
    console.log("Robot " + this.name + " was broken")
};

const rumba = new Robot("Rumba");
rumba.sayHi("Riko");
rumba.changeName("Puzon");
rumba.breakIt();
rumba.sayHi("riko");
rumba.fixIt();
rumba.sayHi("rikO");