import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';


@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CountryModule { }
