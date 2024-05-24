import { Component, OnInit } from '@angular/core';
import { PositionList } from './service/PositionList';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';
import { EmployeeList } from './service/EmployeeList';
import { Position } from './service/Position';
import { FirebaseService } from './service/firebase.service';
import { Employee } from './service/Employee';

@Component({
  selector: 'app-observable-db',
  templateUrl: './observable-db.page.html',
  styleUrls: ['./observable-db.page.scss'],
})
export class ObservableDbPage implements OnInit {
  positions = new PositionList();
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];
  employeeList = new EmployeeList(this.configService);
  pos: Position = new Position();
  count = 0;

  bdEmp = 'Employee';
  bdPos = 'Position';

  constructor(public fbService: FirebaseService) { }

  ngOnInit() {
    this.fetchTask(this.bdEmp, true);

    let taskRes = this.fbService.getRecordList(this.bdEmp, true);
    taskRes.snapshotChanges().subscribe();

    this.fetchTask(this.bdPos, false);
    let taskRes1 = this.fbService.getRecordList(this.bdPos, false);
    taskRes1.snapshotChanges().subscribe();

    const posSub = this.configService.pos$
      .subscribe(() => { this.pos = this.configService.pos$.value; });
    this.subscriptions.push(posSub);
  }

  fetchTask(bd: any, op: any) {
    this.fbService.getRecordList(bd, op).valueChanges().subscribe(res => {
      console.log(res)
      if (op) this.employeeList.employeeList = res;
      else {
        this.positions.position = res;
        this.pos = this.positions.position[this.count];
        this.employeeList.search(this.pos.id);
      }
    })
  }

  next() {
    if (this.count < this.positions.position.length - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configService.setPos(this.positions.position[this.count]);
  }

  addEmp(surname: any, name: any, fname: any, age: any) {
    let employee = new Employee();
    employee.name = name;
    employee.surname = surname;
    employee.fname = fname;
    employee.age = age;
    employee.pos_id = this.pos.id;
    this.fbService.createEmployee(employee);
    this.employeeList.search(this.pos.id);
    this.employeeList.add(employee);
  }

  addPos(name: any) {
    let pos = new Position();
    pos.id = this.positions.position.length + 1;
    pos.name = name;
    this.fbService.createPosition(pos);
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }


}
