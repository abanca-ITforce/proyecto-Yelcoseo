import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from 'src/app/explorador.service';

@Component({
  selector: 'app-countries-region',
  templateUrl: './countries-region.component.html',
  styleUrls: ['./countries-region.component.css']
})
export class CountriesRegionComponent implements OnInit {
  @Input() countriesReList;
  constructor(private route: ActivatedRoute, private exploradorService: ExploradorService) { }

  ngOnInit() {
  }

}
