import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductAxiosService {
  private apiUrl = 'http://localhost:3000/product';
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async createProduct(product: Product): Promise<Product> {
    const response = await this.axiosInstance.post('/', product);
    return response.data;
  }

  async getProducts(): Promise<Product[]> {
    const response = await this.axiosInstance.get('/');
    return response.data;
  }

  async getProduct(id: string): Promise<Product> {
    const response = await this.axiosInstance.get(`/${id}`);
    return response.data;
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    const response = await this.axiosInstance.put(`/${id}`, product);
    return response.data;
  }

  async deleteProduct(id: string): Promise<void> {
    await this.axiosInstance.delete(`/${id}`);
  }
}
