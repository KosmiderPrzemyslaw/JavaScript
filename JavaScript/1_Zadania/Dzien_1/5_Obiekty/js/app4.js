String.prototype.upperLower = function () {
    let result = "";
    let id = 0;

    for (let i = 0; i < this.length; i++) {
        const character = this.charAt(i);
        if (character === "/s") {
            result += character;
            continue;
        }
        result += (id++ % 2 !== 0) ? character.toUpperCase() : character.toLowerCase();
    }
    return result
};

console.log("Smiesznie".toLowerCase());
console.log("JavaScript jest super".upperLower());

