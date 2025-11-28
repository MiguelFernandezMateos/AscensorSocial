import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  movilidad: any[] = [];
  ranking: any[] = [];
  quintiles: any[] = [];

  constructor(private api: DataService) {}

  ngOnInit() {
    this.api.getMovilidad().subscribe(d => this.movilidad = d);
    this.api.getRanking().subscribe(d => this.ranking = d);
    this.api.getQuintiles().subscribe(d => this.quintiles = d);
  }
}
