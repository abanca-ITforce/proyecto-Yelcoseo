import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from '../explorador.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  incominglevel$: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private exploradorService: ExploradorService) {
    this.incominglevel$ = this.exploradorService.getCountriesByIncome();

    this.exploradorService.getCountriesByIncome().subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
