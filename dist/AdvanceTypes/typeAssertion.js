"use strict";
let testing;
testing = "hello user";
testing.length;
testing.length;
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `This converted result is : ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
// const resultToBeNumber = kgToGram(10) as number; // or
const resultToBeNumber = kgToGram(10);
const resultToBeNumber2 = kgToGram('20'); // or
console.log(resultToBeNumber, resultToBeNumber2);
