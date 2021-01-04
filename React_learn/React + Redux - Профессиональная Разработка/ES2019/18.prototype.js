// PROTOTYPE / НАСЛЕДОВАНИЕ
const animal = {
    say() {
        console.log(this.name, 'goes', this.voice);
    }
};
const dog = {
    name: 'dog',
    voice: 'woof'
};
Object.setPrototypeOf(dog, animal); // первый аргумент - обьект наследования, второй - от которого наследуется

const cat = {
    name: 'cat',
    voice: 'meow'
};

dog.say();
// cat.say();