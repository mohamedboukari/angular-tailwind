import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import { FilterArrService } from '../services/filter-arr.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  constructor(
    private productService: ProductService,
    private filtredser: FilterArrService
  ) {}
  items = this.productService.items;
  handleClick = (title: string) => {
    console.log(title);
    this.productService.items.find((prod) => prod.title === title)!.quantity--;
    this.indisponibleProducts = this.filtredser.filtredArr(
      this.items,
      'quantity',
      0
    );
  };

  maxPrice = 4000;

  indisponibleProducts = this.filtredser.filtredArr(this.items, 'quantity', 0);
}
