// Arrow Function

const createArray = (param: string): string[] =>{

    return [param];
}

const createArray1 = <T> (param: T): T[] =>{

    return [param];
}


//Normal Function
function createArray2<T>(param: T):T[]{
    return [param];
}

type Name = {name: string}

const result1 = createArray1<string>("hello Bangladesh");
const result2 = createArray1<boolean>(true);
const result3 = createArray1<Name>({name: "bangladesh"});

// use tuple
const createArraytuple = <X, Y> (param1: X, param2: Y): [X, Y] =>{
    return [param1, param2];
}

const result4 = createArraytuple<string, string>("hello Bangladesh", "hello programmer");

// console.log(result4);

// Spread Operator

const addMeInformation = <T> (myInfo: T) =>{

    const crush = "Priya";
    const newData = {...myInfo, crush};
    return newData;
}

const myInfo = {
    name: "shakib",
    age: 30,
    salary: 10000
};

const result5  = addMeInformation(myInfo);
console.log(result5);
