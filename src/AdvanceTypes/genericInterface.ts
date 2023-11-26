 
interface CrushInterface<T, U> {
    name: string,
    husband: T,
    wife?: U
}

const crush1: CrushInterface<boolean, boolean> = {
    name: "eity",
    husband:false
}

const crush2: CrushInterface<string, boolean> = {
    name: 'mariya',
    husband: "karim"
}

type CrushInterfaceType = {name: string, salary: number}


const crush3: CrushInterface<CrushInterfaceType, CrushInterfaceType> = {
    name: "fatema",
    husband:{
        name: "rahim",
        salary: 11000
    },
    wife:{
        name: 'kulsum',
        salary: 2000,
    }
}


console.log(crush3);
