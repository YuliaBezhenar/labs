import { Polynomial } from "./Polynomial";

export class cubic extends Polynomial{
    constructor(override name: string, override a: number, override b: number, override c: number, override d: number, override x: number) {
        super();
    }
    Y() {
        this.znach = this.a*Math.pow(this.x, 3) + this.b * Math.pow(this.x, 2) + this.c * this.x + this.d;
    }
}