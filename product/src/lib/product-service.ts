import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './store/product.action';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http = inject(HttpClient);

  getProductsByCategory(category: string) {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
  }

  getAllProducts() {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`);
  }

}
