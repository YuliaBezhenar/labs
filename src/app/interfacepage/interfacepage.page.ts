import { Component, OnInit } from '@angular/core';
import { ShowConsole } from './class/ShowConsole';
import { ShowScreen } from './class/ShowScreen';
import { Student } from './class/Student';
import { ZavKafedry } from './class/Zav_kafedry';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show1: string = "";
  show2: string = "";
  
  constructor() { }

  ngOnInit() {
  }
  info() {
    let show_c = new ShowConsole();
    let show_s = new ShowScreen();
    let student1 = new Student("Галиницький Д. Р.", 19, "чоловік", 3, show_c);
    let student2 = new Student("Гаврилюк М. С.", 20, "жінка", 4, show_s);
    this.show1 = show_s.info;
    let zav_kafedry = new ZavKafedry("Романович О. В.", 42, "чоловік", show_s);
    this.show2 = show_s.info;
    console.log(student1.go());
    console.log(student1.study());
    console.log(zav_kafedry.go());
    console.log(zav_kafedry.teach());
  }

}
