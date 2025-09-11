import { createReducer, on } from "@ngrx/store";
import { Cart, cartActions } from "./cart.action";

export interface CartState {
    cart: Cart[];
    error: string;
}

export const initialState: CartState = {
    cart: [],
    error: ''
}


export const cartReducer = createReducer(
    initialState,
    on(cartActions.loadCart, (state) => {
        return {
            ...state,
            cart: state.cart,
            error: ''
        }
    }),

    on(cartActions.loadCartSuccess, (state, action) => {
        return {
            ...state,
            cart: action.cart,
            error: ''
        }
    }),

    on(cartActions.loadCartFailure, (state, action) => {
        return {
            ...state,
            cart: [],
            error: action.error
        }
    })
)

