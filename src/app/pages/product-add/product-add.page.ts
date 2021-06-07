import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

productos: any[];
producto = {id: Date.now(), nombre:'', img:'', precio:''}

  constructor(private router: Router, 
    private toastCtrl: ToastController) { }

  ngOnInit() {

   
  }

ionViewWillEnter(){

this.producto;
this.productos = JSON.parse(localStorage.getItem('productos'));
if(!this.productos){
  this.productos = [];
}
}

agregarProducto(){
  if(this.validations()){

this.productos.push(this.producto);
  localStorage.setItem('productos', JSON.stringify(this.productos));
  this.router.navigate(['/app/product-list']);
  this.producto.nombre='';
  this.producto.precio='';
  this.producto.img='';

  }
  
}

validations(){
  if(!this.producto.nombre){
    this.toast('El producto debe tener un nombre');
    return false;
  }

 
  if(!this.producto.precio){
    this.toast('El producto debe tener un precio');
    return false;
  }

  if(!this.producto.img){
    this.toast('El producto debe tener una imagen');
    return false;
  }


    return true;
}


async toast(message) {
  const toast = await this.toastCtrl.create({
    message: message,
    duration: 2000
  });
  toast.present();
}



}
