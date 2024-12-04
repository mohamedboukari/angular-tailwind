import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product/service/product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  constructor(private productService: ProductService, private route: Router) {}
  formProduct = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    imgUrl: new FormControl('', [Validators.required, Validators.minLength(4)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
    ]),
  });
  submit = (e: Event) => {
    e.preventDefault();
    console.log('data', this.formProduct.value);
    const body: Product = {
      title: this.formProduct.value.title ?? '',
      imgUrl: this.formProduct.value.imgUrl ?? '',
      quantity: Number(this.formProduct.value.quantity),
      id: new Date().getTime(),
      description: this.formProduct.value.description ?? '',
      price: Number(this.formProduct.value.price),
    };
    this.productService.items.push(body);
    this.formProduct.reset();
    this.route.navigateByUrl('/product');
  };
}
