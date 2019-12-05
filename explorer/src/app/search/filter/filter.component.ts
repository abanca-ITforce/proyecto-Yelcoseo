import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() incomes;
  @Input() debts;
  @Input() regions;
  @Output() filter = new EventEmitter<any>();

  searchForm = this.formBuilder.group({
    incomes: [null, []],
    debts: [null, []],
    regions: [null, []]
  });

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit() {
  }
  onSubmit() {
    this.filter.emit(this.searchForm.value);
  }

}
