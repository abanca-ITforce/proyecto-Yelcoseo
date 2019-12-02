import { Component, OnInit } from '@angular/core';
import { ExploradorService } from '../explorador.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries$: Observable<any>;
  constructor(private exploradorService: ExploradorService) {

    this.countries$ = this.exploradorService.getAllCountries();
   }

  ngOnInit() {
  }

}
