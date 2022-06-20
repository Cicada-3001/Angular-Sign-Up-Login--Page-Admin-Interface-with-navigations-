import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-sales-compare',
  templateUrl: './sales-compare.component.html',
  styleUrls: ['./sales-compare.component.css']
})
export class SalesCompareComponent {
  constructor() { }
  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data:{
        labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        datasets: [{
          label: 'Sales in USD',
          data: [650, 590, 800, 810, 560, 550, 400],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'

          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sales in the past week"
            }
          }
        }
  });
  }
}
