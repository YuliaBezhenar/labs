import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';
import { MyformComponent } from '../myform/myform.component';
import { ViewformComponent } from '../viewform/viewform.component';
import { UpdateformComponent } from '../updateform/updateform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
    MyHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [FormPage, MyformComponent, ViewformComponent, UpdateformComponent]
})
export class FormPageModule {}
