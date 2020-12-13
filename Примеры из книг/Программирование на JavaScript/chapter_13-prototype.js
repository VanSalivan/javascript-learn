function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine"
Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.logg = function () {
    console.log(this)
}
Dog.prototype.run = function () {
    console.log("Run!");
};
Dog.prototype.wag = function () {
    console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function () {
    console.log(this.name + " says WOOF!");
};

Dog.prototype.sitting = false;
Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
};

// console.log(fido);
// fido.sit();
//=================================================================
// ToDO еще раз перечитать про создание цепочки прототипов

// Создание цепочки прототипов
function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function () {
    console.log("Stack");
};
ShowDog.prototype.bait = function () {
    console.log("Bait");
};
ShowDog.prototype.gait = function (kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function () {
    console.log("Groom");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");
fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();