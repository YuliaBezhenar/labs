import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Newspaper } from '../myform/Class/Newspaper';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {
  show_update: boolean = false;
  newspapers: Newspaper[] = [];
  
  constructor() { }

  addNewspaper(event: any) {
    if (event as Newspaper) {
      let newspaper: Newspaper = event;
      this.newspapers.push(newspaper);
      console.log(this.newspapers);
    }
    else
      throw new Error("Error of type");    
  }
  update() {
    this.show_update = true;
  }
  showUp(event: any) {
    if (typeof event === "boolean") {
      this.show_update = event;
    }
    else
      throw new Error("Error of type");
  }
  update_save(event: any, i: number) {
    if (event as Newspaper) {
      this.newspapers[i] = event;
    }
    else throw Error("Error of type");
  }

  ngOnInit() {}

}
