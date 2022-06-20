import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-profit-compare',
  templateUrl: './profit-compare.component.html',
  styleUrls: ['./profit-compare.component.css']
})
export class ProfitCompareComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("profit-compare", {
      type: 'bar',
      data:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      
        datasets: [
          {
            label: 'Gross Profit',
            data: [790,934,609,610,816,822,686],
            borderColor:'rgb(255, 99, 132)' ,
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Net Profit',
            data: [-75,360,293,449,-132,84,294],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor:'rgb(54, 162, 235)',
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Differences btw Gross and Net profits'
          }
        }
      }
     
  });




  }

}
