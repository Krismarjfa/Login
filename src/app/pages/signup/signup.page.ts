import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignupPage implements OnInit {

 user={email:'', password:'', username:''};

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

guardarDatos(){
  
  this.toast('Usuario guardado');
  if(this.validations()){
    localStorage.setItem('user',JSON.stringify(this.user));

  }
}

validations(){
  if(!this.user.email){
    this.toast('Debe ingresar el email');
    return false;
  }

 
    if(!this.user.password){
      this.toast('Debe ingresar la contraseña');
      return false;
    }

    if(!this.user.username){
      this.toast('Debe ingresar un nombre de usuario');
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
