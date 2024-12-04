import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './page404/page404.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component'; // <-- Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    ResidenceComponent,
    NavbarComponent,
    Page404Component,
    ProductInfoComponent,
    LoginComponent,
    AddProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
