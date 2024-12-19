import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductAxiosService } from '../services/product-axios.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
})
export class ProductInfoComponent implements OnInit {
  product: Product | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductAxiosService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') || '';
      this.productService.getProduct(id).then((p) => {
        this.product = p;
      });
    });
  }
}
