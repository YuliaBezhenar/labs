import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor() { }
  
  a: number[][] = [];
  n: number = 0;

  buildArray(n: any) {
    this.a = [];
    try {
      this.n = parseInt(n);
      if (isNaN(this.n) == true) {
        throw new Error('Parameter is not a number!!');
      }
      if (n <= 0) {
        throw new Error('Incorrect size of matrix size!');
      }
      let i: number = 0, j: number = 0;
      this.a = Array(this.n);
      console.log("Array created");
      /*for (i = 0; i < this.n; i++){
        this.a[i] = Array(this.n);
        for (j = 0; j < this.n; j++) {
          let aa: number = Math.pow(-1, i) * (i + 2 * j) / 3;
          this.a[i][j] = parseFloat(aa.toFixed(2));
        }        
      }*/
      //Генерація матриці
      for (i = 0; i < this.n; i++) {
        this.a[i] = Array(this.n);
        for (j = 0; j < this.n; j++) {
          this.a[i][j] = Math.floor(Math.random() * 100); //Заповнення випадковими числами від 0 до 99
        }
      }
      console.log("Array generated");
    }
    catch (error) {
      console.log(error);
    }
  }

  getColor(b: number) {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    //Перебір рядків
    for (let i = 0; i < this.a.length; i++) {
      //Перебір колонок
      for (let j = 0; j < this.a[i].length; j++) {
        const currentCellValue = this.a[i][j];

        if (currentCellValue > max) {
          max = currentCellValue;
        }

        if (currentCellValue < min) {
          min = currentCellValue;
        }
      }
    }

    if (b === max) {
      return 'green';
    } else if (b === min) {
      return 'blue';
    } else {
      return 'black';
    }
  }
  ngOnInit() {
    
  }
}
