import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  product:
    | {
        imgUrl: string;
        title: string;
        quantity: number;
        description: string;
      }
    | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private productComponent: ProductComponent
  ) {}

  ngOnInit(): void {
    console.log(this.route.params);

    this.route.paramMap.subscribe((params) => {
      const title = params.get('id');
      this.product = this.productComponent.items.find(
        (item) => item.title === title
      );
    });
  }
}
