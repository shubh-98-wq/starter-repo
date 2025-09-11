import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../store/cart.action';


@Injectable({
    providedIn: 'root'
})
export class CartService {

    private readonly http = inject(HttpClient);

    getCarts(): Observable<Cart[]> {
        return this.http.get<Cart[]>(`https://fakestoreapi.com/carts`);
    }

}