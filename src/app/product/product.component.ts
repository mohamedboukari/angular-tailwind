import { Component, OnInit } from '@angular/core';
import { FilterArrService } from '../services/filter-arr.service';
import { Product } from '../model/product';
import { ProductAxiosService } from '../services/product-axios.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductAxiosService,
    private filtredser: FilterArrService
  ) {}
  items: Product[] = [];
  fullItems: Product[] = [];

  indisponibleProducts: Product[] = [];
  maxPrice = 4000;

  ngOnInit(): void {
    this.productService
      .getProducts()
      .then((products: Product[]) => {
        this.fullItems = products;
        this.updateItems(this.maxPrice);

        this.indisponibleProducts = this.filtredser.filtredArr(
          this.items,
          'quantity',
          0
        );
      })
      .catch((err) => console.log(err))
      .finally(() => console.log('finally'));
  }
  updateItems(maxPrice: number): void {
    this.items = this.fullItems.filter((prod) => prod.price <= maxPrice);

    this.indisponibleProducts = this.filtredser.filtredArr(
      this.items,
      'quantity',
      0
    );
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
  handleDelete = (id: string) => {
    this.productService.deleteProduct(id).then(() => this.ngOnInit());
  };
}
