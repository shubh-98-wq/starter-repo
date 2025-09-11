import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export interface Cart {
    id: number,
    userId: number,
    date: Date,
    products: [
        { productId: number, quantity: number }
    ]
}


export const cartActions = createActionGroup({
    source: '[Cart] Cart Actions',
    events: {
        'Load Cart': emptyProps(),
        'Load Cart Success': props<{ cart: Cart[] }>(),
        'Load Cart Failure': props<{ error: string }>(),
    }
});


