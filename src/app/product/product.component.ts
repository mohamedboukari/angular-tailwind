import { Component } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  constructor(private productService: ProductService) {}
  items = this.productService.items;
  handleClick = (title: string) => {
    console.log(title);
    this.productService.items.find((prod) => prod.title === title)!.quantity--;
  };

  maxPrice = 4000;
}
