import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }
  getRecursion(x: number, cur: number, znak: number, n: number, sum: number) {
    let sqr = x * x, min = 1E-12;
    cur = cur * sqr / (2 * n - 1) / (2 * n - 2);
    n++;
    sum = sum + znak * cur;
    znak = -znak;
    if (cur > min || cur < -min)
      this.getRecursion(x, cur, znak, n, sum);
    else this.yy = sum;
  }
  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn;
    while (x <= xk) {
      this.getRecursion(x, x, -1, 2, x);
      this.xy.set(x, this.yy);
      if (this.logService)
        this.logService.write("x= " + x.toFixed(2) + ", y= " + this.yy.toFixed(4));
      x = x + h;
    }
    return this.xy
  }
}
