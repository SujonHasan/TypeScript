class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string{
        return `This ${this.name} will sleep for ${hours}`
    }
}

class Student extends Parent {

    constructor(name: string, age: number, address: string){
        super(name, age, address);
    }
}

const student1 = new Student("sujon", 26, "Dhaka");
console.log(student1.makeSleep(5));



class Teacher extends Parent {
 
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address);
        this.designation = designation;
    }

    takeClasses (numberOfClass: number) : string{
        return `This ${this.name} will take ${numberOfClass} class`;
    }
}

const teacher1 = new Teacher("Mr.X", 35, "Rajshahi", "Professor");
console.log(teacher1.takeClasses(5));
