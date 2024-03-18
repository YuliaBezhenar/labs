import { Polynomial } from "./Polynomial";

export class quadratic extends Polynomial{
    constructor(override name: string, override b: number, override c: number, override d: number, override x: number, override a: number = 0) {
        super(name, a, b, c, d, x);
        if(name != "Quadratic"){
            throw new Error('Invalid name');
        }
    }
    Y() {
        this.znach = this.b * Math.pow(this.x, 2) + this.c * this.x + this.d;
    }
}