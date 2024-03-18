export abstract class Polynomial {
    name!: string;
    a!: number;
    b!: number;
    c!: number;
    d!: number;
    x!: number;
    znach!: number;
    constructor(name: string, a: number, b: number, c: number, d: number, x: number) {
        
     }
    show() {
        return "Тип: " + this.name + "; Значення: " + this.znach;
    }
    abstract Y(): any;
}