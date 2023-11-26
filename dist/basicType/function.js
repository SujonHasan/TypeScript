"use strict";
// Normal function
// default parameter
// spread operator
// rest paremeter
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
const person = {
    name: "sujon",
    balance: 5,
    addBalance(money) {
        console.log(`My new Balance is ${this.balance + money}`);
    }
};
// console.log(person);
// spread operator
const myFriends = ['sujon', 'shakib', 'joy'];
const newFriends = ['kawsar', 'sumon', 'farid'];
myFriends.push(...newFriends);
// console.log(myFriends); 
/// Rest Parameters
const greetFriends = (...friends) => {
    friends.forEach(friend => console.log(`HI ${friend}`));
};
greetFriends("shakib", "mahim", "sumon", "kawsar");
// array and object Destructuring
