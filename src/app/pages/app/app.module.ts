import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppPage } from './app.page';
import { AppPageRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppPageRoutingModule
  ],
  declarations: [AppPage]
})
export class AppPageModule {}
