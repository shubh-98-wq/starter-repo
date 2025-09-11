import { productReducer, ProductState } from './product.reducer';
import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';


const productFeatureKey = 'product';

// Get the feature slice
export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey);

// Select specific parts
export const selectProducts = createSelector(
    selectProductState,
    (state: ProductState) => state.products
);

export const selectError = createSelector(
    selectProductState,
    (state: ProductState) => state.error
);


export const productFeature = createFeature({
    name: productFeatureKey,
    reducer: productReducer
});

export const selectProductByCategory = createSelector(
    selectProducts,
    (products: ProductState['products'], props: { categoryName: string }) => {
        return products.filter(product => product.category === props.categoryName);
    }
)
