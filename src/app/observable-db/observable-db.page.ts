import { Component, OnInit } from '@angular/core';
import { PositionList } from './service/PositionList';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';
import { EmployeeList } from './service/EmployeeList';
import { Position } from './service/Position';
import { FirebaseService } from './service/firebase.service';
import { Employee } from './service/Employee';
import { each } from 'chart.js/dist/helpers/helpers.core';

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
    let lastEmpId = (this.employeeList.employeeList[this.employeeList.employeeList.length - 1]).emp_id; //значення айді останнього працівника в масиві
    console.log(lastEmpId);
    employee.emp_id = lastEmpId + 1;
    this.fbService.createEmployee(employee);
    this.employeeList.search(this.pos.id);
    this.employeeList.add(employee);
  }

  addPos(name: any) {
    let pos = new Position();
    let lastPosId = (this.positions.position[this.positions.position.length - 1]).id;
    pos.id = lastPosId + 1;
    pos.name = name;
    this.fbService.createPosition(pos);
  }

  editEmployeeMode: boolean = false; //поле редагування співробітника

  editEmployeeButtonClicked() {
    this.editEmployeeMode = true;
  }

  confirmEditEmployee(newSurname: any, newName: any, newFname: any, newAge: any, emp: Employee) {
    let newEmp = new Employee;
    if (newSurname) {
      newEmp.surname = newSurname;
    } else newEmp.surname = emp.surname;
    if (newName) {
      newEmp.name = newName;
    } else newEmp.name = emp.name;
    if (newFname) {
      newEmp.fname = newFname;
    } else newEmp.fname = emp.fname;
    if (newAge) {
      newEmp.age = newAge;
    } else newEmp.age = emp.age;
    newEmp.emp_id = emp.emp_id;
    newEmp.pos_id = emp.pos_id;
    this.fbService.updateEmp((newEmp.emp_id - 1), newEmp, this.bdEmp);
    this.editEmployeeMode = false;
  }
  editEmployee(e: Employee) {
    console.log(e.emp_id);
    this.employeeList.employeeList.forEach((employee) => {
      if (employee.emp_id > e.emp_id) {
        console.log(employee);
      } 
    })
  }
  

  editPositionMode: boolean = false; //поле редагування посади

  editPositionButtonClicked() {
    this.editPositionMode = true;
  }
  confirmEditPosition(newPositionName: any) {
    let newPos = new Position;
    newPos.name = newPositionName;
    newPos.id = this.pos.id;
    //
    //this.fbService.deleteRecord((this.pos.id-1), this.bdPos);
    this.fbService.updatePos((newPos.id-1), newPos, this.bdPos);
    this.editPositionMode = false;
  }

  deleteEmployee(e: Employee) {
    if (window.confirm("Ця дія видалить дані з бази даних. Ви впевнені, що хочете продовжити?")) {
      let id = e.emp_id - 1;
      //console.log(e.emp_id);
      this.fbService.deleteRecord(id, this.bdEmp);
    }
    
    
  }

  deletePosition() {
    if (window.confirm("Ця дія видалить посаду з бази даних та прив'язаних до неї співробітників. Ви впевнені, що хочете продовжити?")){
      this.fbService.deleteRecord((this.pos.id - 1), this.bdPos);
      for (let emp of this.employeeList.searchEmp) {
        let id = emp.emp_id - 1;
        this.fbService.deleteRecord(id, this.bdEmp);
        //this.deleteEmployee(emp);
      }
    }
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }


}
