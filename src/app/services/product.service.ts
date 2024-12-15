import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${this.apiUrl}`) as Observable<Product[]>;
  }

  getProduct(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`) as Observable<Product>;
  }

  updateProduct(id: number, product: Product) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
