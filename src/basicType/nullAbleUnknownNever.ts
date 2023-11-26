//null

function searchName(name: string | null){

    if(name !== null) console.log("searching");
    else console.log("Name is null");
}

// searchName(null);

//Unknown 
const getCarSpeed = (speed: unknown) =>{ 

    if(typeof speed === "number"){
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`my car speed is ${convertedSpeed}`);
    }
    
    if(typeof speed === "string"){

        const value = speed.split(" ")[0];
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`my car speed is ${convertedSpeed}`);
    }
    else{
        console.log("There is wrong");
        
    }
}

getCarSpeed(10);
getCarSpeed("10 kmh^1");