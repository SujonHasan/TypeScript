interface MandatoryInterface {name: string, age: number, salary: number}

const addMeInformation2 = <T extends MandatoryInterface> (myInfo: T) =>{

    const crush = "Priya";
    const newData = {...myInfo, crush};
    return newData;
}


type myInfo2Type ={
    name: string,
    age: number,
    salary: number,
    other: boolean,
}

const myInfo2: myInfo2Type = {
    name: "kawsar",
    age: 25,
    salary: 10000,
    other: true,
};

const result6  = addMeInformation2(myInfo2);
console.log(result6);