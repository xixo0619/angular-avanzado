import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  labels1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

  public data1:ChartData<'doughnut'> = {
    datasets: [{ data: [ 20, 50, 100 ]}]
  }

}
