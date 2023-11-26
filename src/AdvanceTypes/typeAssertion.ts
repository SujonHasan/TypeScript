let testing: any;
testing = "hello user";

(testing as string).length;
<string>testing.length


function kgToGram(param: string | number): string | number | undefined
{
    if(typeof param === "string"){
        const value = parseFloat(param) * 1000;
        return `This converted result is : ${value} gram`
    }

    if(typeof param === 'number'){
        const value = param * 1000;
        return value;
    }

}

// const resultToBeNumber = kgToGram(10) as number; // or
const resultToBeNumber = <number>kgToGram(10);
const resultToBeNumber2 = <string>kgToGram('20'); // or
console.log(resultToBeNumber, resultToBeNumber2);
