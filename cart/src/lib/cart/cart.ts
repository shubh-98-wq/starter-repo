import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCarts } from './store/cart.selector';
import { CommonModule } from '@angular/common';
import { cartActions } from './store/cart.action';

@Component({
  selector: 'lib-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {

  private readonly store = inject(Store);

  // Use "categoryName" as needed in your component logic

  carts$ = this.store.select(selectCarts);


  ngOnInit(): void {
    console.log('cart called')
    this.store.dispatch(cartActions.loadCart());
  }
}
