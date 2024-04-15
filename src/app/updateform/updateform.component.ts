import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Newspaper } from '../myform/Class/Newspaper';
import { ValidatorDateService } from '../myform/validatorDate/validator-date.service';
import { ValidatorToCurrentDateService } from '../myform/validatorDate/validator-to-current-date.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent  implements OnInit {

  @Input() newspaper!: Newspaper;
  @Input() show: boolean = true;
  @Output() newspChange: EventEmitter<Newspaper> = new EventEmitter<Newspaper>();
  @Output() showChange = new EventEmitter();

  constructor() { }

  validate_date(d: string): boolean {
    let validator = new ValidatorDateService();
    if (d) {
      if (!validator.validate_date(d)) return false;
      else return true;
  }
    else return true;
  }
  save(name: any, num: any, date: any, pages: any) {
    this.show = false;
    if (this.validate_date(date)) {
      let valid = new ValidatorToCurrentDateService();
      if (date && !valid.isDateBeforeToday(date))
        throw Error("Incorrect date")
    }
    else throw Error("Error of date");
    this.newspaper = new Newspaper(name, num, date, pages, this.newspaper.newspaper_list);
    this.newspChange.emit(this.newspaper);
    this.showChange.emit(this.show);
    console.log(this.newspaper);
  }

  ngOnInit() {}

}
