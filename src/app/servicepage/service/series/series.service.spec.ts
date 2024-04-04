import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Сума ряду значення x=0.1, y=0.0998', () => {
    let x = 0.1;
    let y = 0.0998;
    let y1 = service.getSeries(x);

    expect(y.toFixed(2)).toBe(y1.toFixed(2));
  });
});
