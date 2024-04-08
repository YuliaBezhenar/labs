import { Injectable } from '@angular/core';
import { StringToDade } from './StringToDate';

@Injectable({
  providedIn: 'root'
})
export class ValidatorToCurrentDateService {

  constructor() { }

  isDateBeforeToday(date: string): boolean {
        const input_date = StringToDade(date);
        const current_date = new Date();
    return input_date < current_date; // Повертає true, якщо введена дата раніше теперішньої дати,
                                      // false, якщо пізніще або рівна
    }
}
