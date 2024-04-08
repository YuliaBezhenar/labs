import { TestBed } from '@angular/core/testing';

import { ValidatorDateService } from './validator-date.service';

describe('ValidatorDateService', () => {
  let service: ValidatorDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Перевірка введення дати 15.25.1875 - false', () => {
    let s = service.validate_date('15.25.1875');
    expect(s).toBe(false);
  });
  it('Перевірка введення дати 15.12.875 - false', () => {
    let s = service.validate_date('15.12.875');
    expect(s).toBe(false);
  });
  it('Перевірка введення дати 12.12.2000 - true', () => {
    let s = service.validate_date('12.12.2000');
    expect(s).toBe(true);
  });
  it('Перевірка введення дати 12/12/2000 - true', () => {
    let s = service.validate_date('12/12/2000');
    expect(s).toBe(true);
  });
});
