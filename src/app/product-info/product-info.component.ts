import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
})
export class ProductInfoComponent implements OnInit {
  product: Product | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.productService.getProduct(id).subscribe((p) => {
        this.product = p;
      });
    });
  }
}
