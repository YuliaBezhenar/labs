import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;
  a: number = 0;
  xx: string[] = [];
  yy: string[] = [];
  data: string[] = [];

  constructor() { Chart.register(...registerables); }

  ngOnInit() {
  }
  //метод створення графіку
  lineChartMethod() {
    //Якщо існує графік - видаляємо його
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    //Створення нового графіку
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(58,224,144)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          }
        ]
      }
    });
  }
  graph(xn: any, xk: any, a: any, h: any) {
    this.data = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);    
    this.h = parseFloat(h);
    let x: number, y: number, i: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();
    while (x < this.xk) {
      if (x <= 0) {
        y = Math.abs(Math.pow(((2 * x + 5) / (Math.pow(x, 3) + 2)), 1.0 / 3.0));
      }
      else
        if (x <= this.a) {
          y = (Math.pow((Math.sin(Math.pow(x,2) + 3) + 4), 0.5)) / (Math.pow(x,2) + 2);
        }
        else {
          y = (Math.pow(Math.sin(x + 2), 3)) / (Math.log(Math.abs(Math.pow(x,2) + 3 * x + 1)));
        }
      this.xx.push(x.toFixed(1));
      this.yy.push(y.toFixed(1));
      let s = 'x= ' + x.toFixed(1) + " y= " + y.toFixed(1);
      this.data.push(s);
      x = x + this.h;
    }
    this.lineChartMethod();
  }

}
