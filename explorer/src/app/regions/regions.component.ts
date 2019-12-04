import { Component, OnInit } from '@angular/core';
import { ExploradorService } from '../explorador.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions$: Observable<any>;
  constructor(activatedRoute: ActivatedRoute, private exploradorService: ExploradorService) {
    this.regions$ = this.exploradorService.getAllRegions();
    // this.exploradorService.getAllRegions().subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
