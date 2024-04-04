import { Chart, registerables } from 'chart.js';
import { RecursionService } from './service/recursion/recursion.service';
import { SeriesService } from './service/series/series.service';
import { TabService } from './service/tab/tab.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {

  constructor(private tabService: TabService,
    private seriesServise: SeriesService,
    private recursionServise: RecursionService) {
    Chart.register(...registerables);
    }
  
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();
  xx: string[] = [];
  yyTab: number[] = [];
  yySer: number[] = [];
  yyRec: number[] = [];

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;

  lineChartMake() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Табулювання',
            data: this.yyTab,
            fill: false,
            borderColor: '#42FFC6',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 2,
            spanGaps: false,
          },
          {
            label: 'Ряд',
            data: this.yySer,
            fill: false,
            borderColor: '#184A38',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 5,
            spanGaps: false,
          },
          {
            label: 'Рекурсія',
            data: this.yyRec,
            fill: false,
            borderColor: '#28EA65',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 10,
            spanGaps: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            suggestedMin: 0,
            title: {
              display: true,
              text: 'X',
            },
            ticks: {
              stepSize: 0.001,
            },
          },
          y: {
            title: {
              display: true,
              text: 'Y',
            },
            ticks: {
              stepSize: 0.001,
            },
          },
        },
      },
    });
  }

  ras(xn: any, xk: any, h: any) {
    let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);
    this.xyTab.clear();
    this.xySeries.clear();
    this.xyRecursion.clear();
    console.log('Табулювання');
    this.xyTab = this.tabService.getTab(xn1, xk1, h1);
    console.log('Ряд');
    this.xySeries = this.seriesServise.getTab(xn1, xk1, h1);
    console.log('Рекурсія');
    this.xyRecursion = this.recursionServise.getTab(xn1, xk1, h1);
    this.input();
    this.lineChartMake();

  }

  input() {
    this.xx = new Array();
    this.yyTab = new Array();
    this.yySer = new Array();
    this.yyRec = new Array();

    this.xyTab.forEach((value, key, map) => {
      let s = '';
      let y: number = 0;
      y = value;
      this.yyTab.push(y);
      s = y.toFixed(4) + ' ';
      y = this.xySeries.get(key);
      this.yySer.push(y);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(key);
      this.yyRec.push(y);
      s = s + ' ' + y.toFixed(4);
      this.xx.push(key.toFixed(1));
      let x = key;
      this.xyInput.set(x.toFixed(2), s);
    });
  }

  ngOnInit() {
  }

}

