import { Component, OnInit } from '@angular/core';
import { Polynomial } from './class/Polynomial';
import { quadratic } from './class/quadratic';
import { cubic } from './class/cubic';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {

  polynom: Polynomial[] = [];
  max: number = 0;

  constructor() { }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  result(nn: any, xx: any) {
    this.polynom = new Array();
    let n = parseInt(nn);
    let x = parseInt(xx);

    for (let i = 0; i < n; i++){
      this.polynom.push(new quadratic("Квадратний", this.getRandomInt(10), this.getRandomInt(10), this.getRandomInt(10), x))
      this.polynom.push(new cubic("Кубічний", this.getRandomInt(10), this.getRandomInt(10), this.getRandomInt(10), this.getRandomInt(10), x))
    }
    this.max = 0;

    this.polynom.forEach((element) => {
      element.Y();
      if (this.max < element.znach) this.max = element.znach;
      console.log(element.show())
    });
  }

  getColor(el: number, max: number) {
    return (Math.abs(el - max) < 0.01) ? "green" : "";
    //return (el === max) ? "green" : "";
  }

  ngOnInit() {
  }

}
