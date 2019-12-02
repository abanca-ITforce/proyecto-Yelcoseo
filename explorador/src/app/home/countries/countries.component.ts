import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from 'src/app/explorador.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() countries;

  constructor(activatedRoute: ActivatedRoute, private exploradorService: ExploradorService) {

    // this.countries = this.exploradorService.getAllCountries();


  }

  ngOnInit() {
  }

}
