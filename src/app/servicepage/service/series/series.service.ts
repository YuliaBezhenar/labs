import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private LogService: LogService) { }
  getSeries(x: number) {
    // sum - перше значення, cur - current, поточний член ряду
    // znak - знак
    let sum: number = x, sqr = x * x, min = 1E-12, cur = x, n = 1, znak = -1;
    do {
      n++;
      cur = cur * sqr / (2 * n - 1) / (2 * n - 2);
      sum = sum + znak * cur;
      znak = -znak;
    } while (cur > min || cur < -min)
    return sum;
  }

  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn, y = 0.0;
    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.LogService)
        this.LogService.write("x= " + x.toFixed(2) + ", y= " + y.toFixed(4));
      x = x + h;
    }
    return this.xy;
  }
}
