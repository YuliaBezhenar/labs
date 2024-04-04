import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Сума ряду значення x=0.1, y=0.0998', () => {
    let x = 0.1;
    let y = 0.0998;
    service.getRecursion(x, x, -1, 2, x)
    let y1: number | undefined = 99;    
    let xy = service.getTab();
    y1 = xy.get(x);
    if (y1 !== undefined) {
      expect(y.toFixed(2)).toBe(y1.toFixed(2));
    };
  });
});
