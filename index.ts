class Greeter {

    firstname:string;
    lastname:string;
    constructor(firstname:string, lastname:string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    showGreeting() {
        const row2 = document.getElementById("Hover Over Me!");
        row2.innerHTML = 'Hello ' + this.firstname + ' ' + this.lastname + '.';
}

    resetGreeting() {
        const row2 = document.getElementById("Hover Over Me!");
        row2.innerHTML = "Hover Over Me!";
    }

}
    const greeter = new Greeter('Nareg', 'Apkarian');