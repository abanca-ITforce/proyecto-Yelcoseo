import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FilterComponent } from './filter/filter.component';
import { ResultListComponent } from './result-list/result-list.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [SearchComponent, FilterComponent, ResultListComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatSelectModule


  ]
})
export class SearchModule { }
