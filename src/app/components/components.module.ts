import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderSecondaryComponent, HeaderComponent],
  exports:[HeaderSecondaryComponent, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
