import { IPerson} from "./person.interface";

class Person implements IPerson {
    
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) { 

        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Billy", "Talley");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);