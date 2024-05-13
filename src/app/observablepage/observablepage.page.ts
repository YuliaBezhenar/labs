import { EmployeeList } from './service/EmployeeList';
import { Component, OnInit } from '@angular/core';
import { PositionList } from './service/PositionList';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';
import { Position } from './service/Position';
import { Employee } from './service/Employee';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {

  positions = new PositionList();
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];
  employeeList = new EmployeeList(this.configService);
  pos: Position = new Position();
  count = 0;
  constructor() { }

  ngOnInit() {
    const posSub = this.configService.pos$
      .subscribe(() => { this.pos = this.configService.pos$.value; });
    this.subscriptions.push(posSub);
  }

  next() {
    if (this.count < this.positions.position.size - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configService.setPos(this.positions.position.get(this.count));
  }

  addEmp(surname: any, name: any, fname: any, age: any) {
    let employee = new Employee();
    employee.name = name;
    employee.surname = surname;
    employee.fname = fname;
    employee.age = age;
    employee.pos_id = this.pos.id;
    this.employeeList.add(employee);
  }

  addPos(name: any) {
    let pos = new Position();
    pos.id = this.positions.position.size;
    pos.name = name;
    this.positions.add(pos);
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }

}
