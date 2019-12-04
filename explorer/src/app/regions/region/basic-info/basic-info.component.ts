import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from 'src/app/explorador.service';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  // basicInfo: Observable<any>;
  @Input() basicInfo;
  constructor(private route: ActivatedRoute, private exploradorService: ExploradorService) {
    // this.cod = this.route.snapshot.params.cod;
    // this.basicInfo$ = this.exploradorService.getRegionInfo(this.cod);
    // this.exploradorService.getRegionInfo(this.cod).subscribe(data => console.log(data));
   }


  ngOnInit() {
  }

}
