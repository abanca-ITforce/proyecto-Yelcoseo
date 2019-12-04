import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { CountriesRegionComponent } from './countries-region/countries-region.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [RegionComponent, BasicInfoComponent, CountriesRegionComponent],
  imports: [
    CommonModule,
    RegionRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ]
})
export class RegionModule { }
