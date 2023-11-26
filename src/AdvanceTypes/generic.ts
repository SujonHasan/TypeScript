type GenericArray<T> = Array<T>

const rollNumber: GenericArray<number> = [10, 20, 30];
const rollNumber2: GenericArray<string> = ["10", "20", "30"];
const rollNumber3: GenericArray<boolean> = [true, false];

const userNameAndRollNumber: GenericArray<{name: string, roll:number}> = [
    {
        name: "sujon",
        roll: 1,
    }
]

// console.log(userNameAndRollNumber);

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["sujon", "Programming"];

// type relationWithSalaryType = {name: string, salary: number}
interface relationWithSalaryInterface {
    name:string,
    salary:number
}

const relationWithSalary: GenericTuple<relationWithSalaryInterface, string> = [
    {
        name: "sujon",
        salary: 10000
    },
    "programming"
]

console.log(relationWithSalary);



