import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAxiosService } from '../services/product-axios.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  product: Product | undefined = undefined;
  id: string | null = null;
  formProduct: FormGroup = new FormGroup({});

  constructor(
    private productService: ProductAxiosService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formProduct = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      imgUrl: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });

    this.activatedRoute.paramMap.subscribe(async (params) => {
      const idx = params.get('id');
      this.id = idx;

      if (this.id) {
        this.productService.getProduct(this.id).then((p) => {
          this.product = p;

          if (this.product) {
            this.formProduct.patchValue(this.product);
          }
        });
      }
    });
  }

  submit = (e: Event) => {
    e.preventDefault();

    const body: Product = {
      title: this.formProduct.value.title || '',
      imgUrl: this.formProduct.value.imgUrl || '',
      quantity: Number(this.formProduct.value.quantity),
      id: this.id?.toString() || new Date().getTime().toString(),
      description: this.formProduct.value.description || '',
      price: Number(this.formProduct.value.price),
    };

    (this.id
      ? this.productService.updateProduct(this.id, body)
      : this.productService.createProduct(body)
    ).then(() => {
      this.route.navigateByUrl('/product');
      this.formProduct.reset();
    });
  };
}
