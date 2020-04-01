const Rectangle = function (a,b) {
    this.a = a;
    this.b = b;
};

Rectangle.prototype.getArea = function () {
    return this.a * this.b;
};

Rectangle.prototype.getPerimeter = function () {
    return 2 * this.a + 2 * this.b;
};

const figure = new Rectangle(2,3);
console.log(figure.getArea());
console.log(figure.getPerimeter());