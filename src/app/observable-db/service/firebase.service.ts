import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Employee } from './Employee';
import { Position } from './Position';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  empListRef?: AngularFireList<any>;
  posListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createEmployee(employee: Employee) {
    return this.db.object('/Employee/' + (employee.emp_id-1)).set({
      pos_id: employee.pos_id,
      surname: employee.surname,
      name: employee.name,
      fname: employee.fname,
      age: employee.age,
      emp_id: employee.emp_id
    });
  }

  createPosition(pos: Position) {
    return this.db.object('/Position/' + (pos.id-1)).set({
      id: pos.id,
      name: pos.name
    });
  }

  getRecord(id: number, bd: string) {
    this.bdRef = this.db.object('/' + bd + id);
    console.log("bdRef=" + this.bdRef.snapshotChanges());
    return this.bdRef;
  }

  //true - eployee
  //false - position
  getRecordList(bd: string, op: boolean) {
    if (op) {
      this.empListRef = this.db.list('/' + bd);
      return this.empListRef;
    }
    else {
      this.posListRef = this.db.list('/' + bd);
      return this.posListRef;
    }
  }

  updateEmp(id: number, employee: Employee, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      pos_id: employee.pos_id,
      surname: employee.surname,
      name: employee.name,
      fname: employee.fname,
      age: employee.age,
      emp_id: employee.emp_id
    })
  }
  updatePos(id: number, pos: Position, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      id: pos.id,
      name: pos.name
    })
  }


  deleteRecord(id: number, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    this.bdRef.remove();
  }

  
}
