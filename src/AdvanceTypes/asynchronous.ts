const makePromise = (): Promise<string> => {
    return new Promise<string> ((resolve, reject) =>{

        const data: string = "Data is fetched";
        if(data){
            resolve(data);
        }
        else reject("Failed to fetched data");
    })
}

const getPromiseData =async (): Promise<void> => {
    const data = await makePromise();
    console.log(data);
}

// object

interface DataType {
    data: string,
}

const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType> ((resolve, reject) =>{

        const data: DataType = {data: "Data is fetched"};

        if(data){
            resolve(data);
        }
        else reject("Failed to fetched data");
    })
}

const getPromiseObjectData =async (): Promise<void> => {
    const data = await makePromiseObject();
    console.log(data);
}

// fetch data 

interface ITodo {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const getTodo = async (): Promise<ITodo> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return await response.json();
}

const getTodoData =async (): Promise<void> => {

    const result7 = await getTodo();
    console.log(result7);
}

getTodoData();