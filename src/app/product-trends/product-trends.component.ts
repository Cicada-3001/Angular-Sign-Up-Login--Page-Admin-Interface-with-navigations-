import { Component, OnInit } from '@angular/core';
import Chart  from 'chart.js/auto'
@Component({
  selector: 'app-product-trends',
  templateUrl: './product-trends.component.html',
  styleUrls: ['./product-trends.component.css']
})
export class ProductTrendsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    const myChart = new Chart("product-trends-chart", {
      type: 'line',
      data: {
        labels: ['January','February','March','April','May','June','July'],
        datasets: [
          {
            label: 'Tvs',
            data:[650,350,420,500,844,625,550],
            borderColor:'rgb(255, 99, 132)',
            backgroundColor:'rgb(255, 99, 132)',
            fill: true
          },
          {
            label: 'Gaming Consoles',
            data:[-94,623,595,394,650,319,420],
            borderColor:'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            fill: true
          },
          {
            label: 'Laptops',
            data:[650,529,844,623,515,490,850],
            borderColor:'rgb(255, 205, 86)',
            backgroundColor:'rgb(255, 205, 86)',
            fill: true
          },
          {
            label: 'Desktops',
            data:[265,623,-103,650,-500,420,588],
            borderColor: 'rgb(50,205,50)',
            backgroundColor: 'rgb(50,205,50)',
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Product Sales in the past 6 months"
          },
         
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    
  });
  
  }
}



