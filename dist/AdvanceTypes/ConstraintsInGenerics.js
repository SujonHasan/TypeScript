"use strict";
const addMeInformation2 = (myInfo) => {
    const crush = "Priya";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo2 = {
    name: "kawsar",
    age: 25,
    salary: 10000,
    other: true,
};
const result6 = addMeInformation2(myInfo2);
console.log(result6);
