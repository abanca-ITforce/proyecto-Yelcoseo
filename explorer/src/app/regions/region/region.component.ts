import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from 'src/app/explorador.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  cod;
  info$: Observable<any>;
  countriesList$: Observable<any[]>;

  constructor(private route: ActivatedRoute, private exploradorService: ExploradorService) {
    this.cod = this.route.snapshot.params.regionId;
    this.info$ = this.exploradorService.getRegionInfo(this.cod);
    // this.exploradorService.getRegionInfo(this.cod).subscribe(data => console.log(data));

    this.countriesList$ = this.exploradorService.getRegionCountryList(this.cod);
    this.exploradorService.getRegionCountryList(this.cod).subscribe(data => console.log(data));


  }


  ngOnInit() {
  }

}
