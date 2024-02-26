import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }
  a: number = 0;
  b: number = 0;
  c: number = 0;

  sum(a: any, b: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = 0;

      if (isNaN(this.a) || isNaN(this.b)) {
        throw new Error('Один з параметрів не є числом!!');
      }

      for (let i = this.a; i <= this.b; i++) {
        if ((i % 11 == 0) && (i % 8 == 5)) {
          this.c += i;
        }
      }

    }
    catch (error) {
      console.log(error);
    }
  }

}
