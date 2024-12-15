import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { Page404Component } from './page404/page404.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductInfoComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-product/:id', component: AddProductComponent },

  { path: 'residence', component: ResidenceComponent },
  { path: 'not-found', component: Page404Component },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
