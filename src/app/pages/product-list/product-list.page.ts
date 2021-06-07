import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { ProductEditPage } from '../product-edit/product-edit.page';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  productos: any[];
  
  constructor(private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.productos = JSON.parse(localStorage.getItem('productos'));
  }


async editProduct(product) {
  const modal = await this.modalController.create({
  component: ProductEditPage,
  componentProps: { producto: product}
  });

  await modal.present();

}


deleteProduct(product){
  this.productos = this.productos.filter(res => {return res.id !== product.id});
  setTimeout(() => {
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }, 1000);
}

async confirm(product) {
  const alert = await this.alertController.create({
  header: '¿Deseas eliminar este producto',
  message: 'Después de eliminarlo no podrás recuperarlo',
    buttons: [
  {
    text:'Cancelar',
    role:'cancel'
  },
  {
    text:'Aceptar',
   handler:() => {
     this.deleteProduct(product);
   }
  },
  ]
  });

  await alert.present();
}


  async Options(product){
   
      const actionSheet = await this.actionSheetController.create({
        header: 'Opciones',
        buttons: [{
          text: 'Ver producto',
          icon: 'eye-outline',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Editar Producto',
          icon: 'create-outline',
          handler: () => {
            this.editProduct(product);
          }
        }, {
          text: 'Eliminar Producto',
          icon: 'trash-outline',
          handler: () => {
          this.confirm(product);
          }
        }]
      });
    
      await actionSheet.present();
    }
  }


