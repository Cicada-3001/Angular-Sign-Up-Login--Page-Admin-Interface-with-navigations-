import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
@Component({
  selector: 'app-sales-trends',
  templateUrl: './sales-trends.component.html',
  styleUrls: ['./sales-trends.component.css']
})
export class SalesTrendsComponent implements OnInit {
  ngOnInit(): void {
    const myChart = new Chart('sales-trends-chart', {
      type: 'line',
       data:{
        labels:['January','February','March','April','May','June','July','August'],
        datasets: [
          {
            label: 'Sales trends',
            data: [650,599,420,588,844,623,595,744],
            borderColor:  'rgb(255, 99, 132)',
            backgroundColor:  'rgb(255, 99, 132)',
            fill: false
          }
        ]
      },
      options: {

        responsive: true,
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: true,
            text: "Sales Trends"
          }
        },
        interaction: {
          intersect: false,
        }
      }
  });








  }

}
