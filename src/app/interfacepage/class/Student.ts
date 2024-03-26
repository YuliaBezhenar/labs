import { IPerson } from "../interface/IPerson";
import { IGo } from "../interface/IGo";
import { IStudy } from "../interface/IStudy";
import { IShow } from "../interface/IShow";

export class Student implements IPerson, IGo, IStudy{
    name: string;
    age: number;
    gender: string;
    year: number;

    constructor(name: string, age: number, gender: string, year: number, shower: IShow) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.year = year;
        if (this.gender == "жінка") {
            shower.show("Студентка "+ this.name + ", віком " + this.age + " років, на " + this.year + " році навчання.")
        }
        else {
            shower.show("Студент "+ this.name + ", віком " + this.age + " років, на " + this.year + " році навчання.")
        }
        
    }

    go() {
        return "Я відвідую університет.";
    }
    study() {
        return "Я навчаюся.";
    }
}