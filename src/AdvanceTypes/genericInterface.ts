
interface CrushInterface<T> {
    name: string,
    husband: T
}

const crush1: CrushInterface<boolean> = {
    name: "eity",
    husband:false
}

const crush2: CrushInterface<string> = {
    name: 'mariya',
    husband: "karim"
}


const crush3: CrushInterface<{name: string, salary: number}> = {
    name: "fatema",
    husband:{
        name: "rahim",
        salary: 11000
    }
}


console.log(crush3);
