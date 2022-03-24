import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input () line: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';


  @Input () barChartData!: ChartData;
    // labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    // datasets: [
    //   { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#3634F5', hoverBackgroundColor: 'red' },
    //   { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#D4AD59', hoverBackgroundColor: 'red' },
    //   { data: [ 8, 68, 70, 39, 56, 87, 50 ], label: 'Series C', backgroundColor: '#59D4BF', hoverBackgroundColor: 'red' },
    // ]
  




  constructor() { }

  ngOnInit(): void {
    if (this.line === true) {
      this.barChartType = 'line';
    }
  }

}
