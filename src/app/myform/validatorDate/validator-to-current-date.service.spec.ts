import { TestBed } from '@angular/core/testing';

import { ValidatorToCurrentDateService } from './validator-to-current-date.service';

describe('ValidatorToCurrentDateService', () => {
  let service: ValidatorToCurrentDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorToCurrentDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Перевірка дати 10.03.2024 - true', () => {
    let date = "10.03.2024";
    expect(service.isDateBeforeToday(date)).toBe(true);
  });
  it('Перевірка дати 22.05.2024 - false', () => {
    let date = "22.05.2024";
    expect(service.isDateBeforeToday(date)).toBe(false);
  });
});
