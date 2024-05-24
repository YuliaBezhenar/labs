import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservableDbPageRoutingModule } from './observable-db-routing.module';

import { ObservableDbPage } from './observable-db.page';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { MyHeaderModule } from '../my-header/my-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservableDbPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [ObservableDbPage]
})
export class ObservableDbPageModule {}
