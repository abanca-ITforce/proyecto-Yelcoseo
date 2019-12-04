import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionComponent } from './region.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';

const routes: Routes = [
  { path: '', component: RegionComponent },
  { path: ':cod', component: BasicInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
