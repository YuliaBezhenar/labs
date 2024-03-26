import { IGo } from "../interface/IGo";
import { IShow } from "../interface/IShow";
import { ITeach } from "../interface/ITeach";
import { Teacher } from "./Teacher";


export class ZavKafedry extends Teacher implements IGo, ITeach{


    constructor(name: string, age: number, gender: string, shower: IShow) {
        super(name, age, gender);
        shower.show("Завідувач кафедрою " + this.name + ", вік: " + this.age + ", " + this.gender)
    }
    go() {
        return "Я займаю посаду завдувача кафедри в університеті."
    }
    teach() {
        return "Я викладаю."
    }
}