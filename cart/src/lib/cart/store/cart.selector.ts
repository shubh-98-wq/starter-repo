import { cartReducer, CartState } from './cart.reducer';
import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';


const cartFeatureKey = 'cart';

// Get the feature slice
export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

// Select specific parts
export const selectCarts = createSelector(
    selectCartState,
    (state: CartState) => state.cart
);


export const cartFeature = createFeature({
    name: cartFeatureKey,
    reducer: cartReducer
});
