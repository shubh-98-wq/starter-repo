import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Categories {

  private readonly http = inject(HttpClient);


  getCategories() {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }

}
