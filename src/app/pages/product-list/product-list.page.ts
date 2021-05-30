import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  productos: any[];
  
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.productos = JSON.parse(localStorage.getItem('productos'));
  }
}
