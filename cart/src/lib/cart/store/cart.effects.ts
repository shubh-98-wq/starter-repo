import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { CartService } from '../service/cart.service';
import { cartActions, Cart } from './cart.action';



export const loadCarts = createEffect(
    (
        actions$ = inject(Actions),
        cartService = inject(CartService)
    ) => {
        return actions$.pipe(
            ofType(cartActions.loadCart),// listen for action
            exhaustMap(() =>            // destructure payload
                cartService.getCarts().pipe(
                    map((cart: Cart[]) =>
                        cartActions.loadCartSuccess({ cart })
                    ),
                    catchError((error: { message: string }) =>
                        of(cartActions.loadCartFailure({ error: error.message }))
                    )
                )
            )
        );
    },
    { functional: true }
);


