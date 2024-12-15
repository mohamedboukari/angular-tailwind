import { Component, OnInit } from '@angular/core';
import { FilterArrService } from '../services/filter-arr.service';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private filtredser: FilterArrService
  ) {}
  items: Product[] = [];
  indisponibleProducts: Product[] = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.items = products;

      this.indisponibleProducts = this.filtredser.filtredArr(
        this.items,
        'quantity',
        0
      );
    });
  }
  handleClick = (title: string) => {
    console.log(title);
    this.items.find((prod) => prod.title === title)!.quantity--;
    this.indisponibleProducts = this.filtredser.filtredArr(
      this.items,
      'quantity',
      0
    );
  };
  handleDelete = (id: number) => {
    this.productService.deleteProduct(id).subscribe(() => this.ngOnInit());
  };
  maxPrice = 4000;
}
