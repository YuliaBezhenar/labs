import { IPerson } from "../interface/IPerson";


export abstract class Teacher implements IPerson {
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}