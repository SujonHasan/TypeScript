"use strict";
// Arrow Function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param) => {
    return [param];
};
const result1 = createArray1("hello Bangladesh");
const result2 = createArray1(true);
const result3 = createArray1({ name: "bangladesh" });
// use tuple
const createArraytuple = (param1, param2) => {
    return [param1, param2];
};
const result4 = createArraytuple("hello Bangladesh", "hello programmer");
// console.log(result4);
// Spread Operator
const addMeInformation = (myInfo) => {
    const crush = "Priya";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "shakib",
    age: 30,
    salary: 10000
};
const result5 = addMeInformation(myInfo);
console.log(result5);
