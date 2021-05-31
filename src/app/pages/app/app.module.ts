import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppPage } from './app.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'app',
    component: AppPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('../../pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../../pages/admin/admin.module').then( m => m.AdminPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'app/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppPage]
})
export class AppPageModule {}
