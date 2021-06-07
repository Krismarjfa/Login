import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {

@Input() producto;
productos: any[];


  constructor(private modalController: ModalController,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
this.productos = JSON.parse(localStorage.getItem('productos'));
  }

  close(){
    this.modalController.dismiss();
  }


async guardar(){

  const loading = await this.loadingController.create({
    message: 'Actualizando',   
    spinner: 'bubbles'
  });
  await loading.present();

  this.productos = this.productos.filter(res => {return res.id !== this.producto.id});

  setTimeout(() => {
    this.productos.push(this.producto);
    localStorage.setItem('productos', JSON.stringify(this.productos));
    this.close();
    loading.dismiss();
  }, 1000);
  

}


}
