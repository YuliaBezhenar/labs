import { Polynomial } from "./Polynomial";

export class binomial extends Polynomial{
    constructor(override name: string, override c: number, override d: number, override x: number, override a: number = 0, override b: number = 0) {
        super(name, a, b, c, d, x);
        if(name != "Binomial"){
            throw new Error('Invalid name');
        }
    }
    Y() {
        this.znach = this.c * this.x + this.d;
    }
}