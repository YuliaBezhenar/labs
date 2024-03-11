import { Polynomial } from "./Polynomial";

export class quadratic extends Polynomial{
    constructor(override name: string, override b: number, override c: number, override d: number, override x: number, override a: number = 0) {
        super();
    }
    Y() {
        this.znach = this.b * Math.pow(this.x, 2) + this.c * this.x + this.d;
    }
}