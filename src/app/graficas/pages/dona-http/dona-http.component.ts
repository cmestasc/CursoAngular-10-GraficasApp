import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';
import { BaseChartDirective } from 'ng2-charts';

interface DonaData {
  data: number[];
  backgroundColor?: string[];
}

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [
    //Problema con la librería, no carga los datos del ngOnInit
    'facebook', 'youtube', 'whatsapp', 'facebook-messenger', 'instagram'
  ];
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 

  public donaData: DonaData[] =[];
    // { data: [ 350, 450, 100 ], backgroundColor: ['#5BD615','#D674C9','#F59014']}
  

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: this.donaData
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe(data=>{
    //   console.log(data);
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);

    //   console.log(labels)

    //   this.doughnutChartLabels=labels;
    //   this.donaData.push({
    //     data: values
    //   })
      
    //   console.log(this.doughnutChartLabels)
    // })

    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe( ({labels, values}) => {
      this.doughnutChartLabels = labels;
      this.donaData.push({
        data: values
      });
    })
  }


}
