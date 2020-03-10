var Greeter = /** @class */ (function () {
    function Greeter(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Greeter.prototype.showGreeting = function () {
        var row2 = document.getElementById("Hover Over Me!");
        row2.innerHTML = 'Hello ' + this.firstname + ' ' + this.lastname + '.';
    };
    Greeter.prototype.resetGreeting = function () {
        var row2 = document.getElementById("Hover Over Me!");
        row2.innerHTML = "Hover Over Me!";
    };
    return Greeter;
}());
var greeter = new Greeter('Nareg', 'Apkarian');
