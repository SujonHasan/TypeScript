type User = {
    name: string,
    age: number,
}

// intersection 
type extendedUser = User & {
    role: string,
}

interface IUser {
    name: string,
    age: number,
}

interface IextendedUser extends IUser {
    role: string,
}


const user2: User | extendedUser = {
    name: 'sujon',
    age: 22,
    role: "admin",
}

const Iuser:IUser | IextendedUser = {
    name: "kawsar",
    age: 23,
    role: "unknown",
}

console.log(user2);
console.log(Iuser);

