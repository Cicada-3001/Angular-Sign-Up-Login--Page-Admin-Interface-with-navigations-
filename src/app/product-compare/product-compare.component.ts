import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.css']
})
export class ProductCompareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("productChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Tvs',
          'Gaming Consoles',
          'Laptops',
          'Desktops'
        ],
        datasets: [{
          data: [45,15,30,10],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(50,205,50)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Products in Stock"
          }
        }
      }
      

  });
  }

}
