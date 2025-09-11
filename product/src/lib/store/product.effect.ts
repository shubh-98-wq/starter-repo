import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Product, getProductForCategory } from './product.action';
import { ProductService } from '../product-service';


export const loadProductsByCatgory = createEffect(
    (
        actions$ = inject(Actions),
        productService = inject(ProductService)
    ) => {
        return actions$.pipe(
            ofType(getProductForCategory.getProductByCategory),
            tap((name) => console.log(name)),// listen for action
            exhaustMap(({ categoryName }) =>            // destructure payload
                productService.getProductsByCategory(categoryName).pipe(
                    map((products: Product[]) =>
                        getProductForCategory.getProductSuccess({ products })
                    ),
                    catchError((error: { message: string }) =>
                        of(getProductForCategory.getProductFailure({ error: error.message }))
                    )
                )
            )
        );
    },
    { functional: true }
);

export const loadProducts = createEffect(
    (
        actions$ = inject(Actions),
        productService = inject(ProductService)
    ) => {
        return actions$.pipe(
            ofType(getProductForCategory.getAllProducts),// listen for action
            exhaustMap(() =>            // destructure payload
                productService.getAllProducts().pipe(
                    map((products: Product[]) =>
                        getProductForCategory.getProductSuccess({ products })
                    ),
                    catchError((error: { message: string }) =>
                        of(getProductForCategory.getProductFailure({ error: error.message }))
                    )
                )
            )
        );
    },
    { functional: true }
);

