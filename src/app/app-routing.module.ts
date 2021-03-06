import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NoAuthGuard } from "./guards/no-auth.guard";

const routes: Routes = [

  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), canActivate:[NoAuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
 
 
  {
    path: 'app',
    loadChildren: () => import('./pages/app/app.module').then( m => m.AppPageModule)
  },  {
    path: 'product-edit',
    loadChildren: () => import('./pages/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
