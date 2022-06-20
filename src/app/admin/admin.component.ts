import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  query: String = ''
  imgUrl: String= 'https://assets.teenvogue.com/photos/5ec13231a575717f045cbec3/master/pass/GettyImages-1225292516.jpg'

  
  showSuppliers() {
    alert("The suppliers functionality coming soon...")
  }
  showSettings() {
    alert("The settings functionality coming soon...")
  }
}
