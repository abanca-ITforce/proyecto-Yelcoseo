import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from '../explorador.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country$: Observable<any>;
  id;

  constructor(activatedRoute: ActivatedRoute, private exploradorService: ExploradorService) {
    this.id = activatedRoute.snapshot.params.cod;
    this.country$ = this.exploradorService.getCountryId(this.id);
    // this.exploradorService.getCountryId(this.id).subscribe(data => console.log(data));
    this.exploradorService.getCountryId(this.id).subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
