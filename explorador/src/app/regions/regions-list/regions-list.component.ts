import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from 'src/app/explorador.service';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {
  @Input() regions;
  constructor(activatedRoute: ActivatedRoute, private exploradorService: ExploradorService) { }

  ngOnInit() {
  }

}
