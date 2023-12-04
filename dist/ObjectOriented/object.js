"use strict";
class Animal {
    // name: string;
    // species: string;
    // sound: string;
    // if use public keyword . doesn't need to extra variable
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound} ... `);
    }
}
const dog = new Animal("pupu", "dog", "ghew ghew");
const cat = new Animal("mini", "cat", "meo meo");
dog.makeSound();
cat.makeSound();
