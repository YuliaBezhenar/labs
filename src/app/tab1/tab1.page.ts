import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() { }
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;

  sumOfCubes(a: any, b: any, c: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      this.d = 0;

      if ((isNaN(this.a) == true) || (isNaN(this.b) == true) || (isNaN(this.c) == true)) {
        throw new Error('Parameter is not a number!!');
      }

      if (this.a % 7 == 0) {
        this.d += Math.pow(this.a, 3);
      }

      if (this.b % 7 == 0) {
        this.d += Math.pow(this.b, 3);
      }

      if (this.c % 7 == 0) {
        this.d += Math.pow(this.c, 3);
      }
      
    }
    catch (error) {
      console.log(error);
    }
  }

}
