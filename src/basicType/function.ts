// Normal function
// default parameter
// spread operator
// rest paremeter

function add(num1: number, num2: number){

    return num1 + num2;
}
const addArrow = (num1: number, num2: number): number => num1 + num2;


const person: {
    name: string,
    balance: number,
    addBalance(money: number):void
} = {
    name: "sujon",
    balance: 5,
    addBalance(money: number){
        console.log(`My new Balance is ${this.balance + money}`);
        
    }
}

// console.log(person);


// spread operator
const myFriends = ['sujon', 'shakib', 'joy'];
const newFriends = ['kawsar', 'sumon', 'farid']

myFriends.push(...newFriends);

// console.log(myFriends); 


/// Rest Parameters
const greetFriends = (...friends: string[]): void =>{

    friends.forEach(friend => console.log(`HI ${friend}`)
    )
}

greetFriends(
    "shakib",
    "mahim",
    "sumon",
    "kawsar"
)

// array and object Destructuring

