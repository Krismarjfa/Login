import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user={email:'', password:''};
  userCheck = JSON.parse(localStorage.getItem('user'))
  constructor(private toastCtrl: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

login(){
if(this.validations()){
this.router.navigate(['home']);
}
}







  validations(){

if(this.user.email !== this.userCheck.email){
 this.toast('Email incorrecto')
  return false;
}

if(this.user.password !== this.userCheck.password){
  this.toast('Contreseña incorrecta')
   return false;
 }

    if(!this.user.email){
      this.toast('Debe ingresar el email');
      return false;
    }
  
   
      if(!this.user.password){
        this.toast('Debe ingresar la contraseña');
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
