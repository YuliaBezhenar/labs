import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservableDbPage } from './observable-db.page';

const routes: Routes = [
  {
    path: '',
    component: ObservableDbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableDbPageRoutingModule {}
