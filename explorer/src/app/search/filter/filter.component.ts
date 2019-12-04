import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from 'src/app/explorador.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() income;
  constructor(activatedRoute: ActivatedRoute, private exploradorService: ExploradorService) {

   }

  ngOnInit() {
  }

}
