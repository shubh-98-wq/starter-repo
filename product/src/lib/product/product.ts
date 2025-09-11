import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductForCategory } from '../store/product.action';
import { selectProductByCategory, selectProducts } from '../store/product.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product implements OnInit {
  @Input() set categoryName(value: string) {
    if (value) {
      this.store.dispatch(getProductForCategory.getProductByCategory({ categoryName: value }));
    } else {
      this.store.dispatch(getProductForCategory.getAllProducts());
    }
  }


  private readonly store = inject(Store);

  // Use "categoryName" as needed in your component logic

  product$ = this.store.select(selectProducts);

  ngOnInit(): void {
    console.log('called')
    // this.store.dispatch(getProductForCategory.getAllProducts());
  }

}
