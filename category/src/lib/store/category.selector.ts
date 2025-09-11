import { categoryReducer, CategoryState } from './category.reducer';
import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreEnum } from '../store.enum';



// Get the feature slice
export const selectCategoryState = createFeatureSelector<CategoryState>(StoreEnum.categoryFeatureKey);

// Select specific parts
export const selectCategories = createSelector(
    selectCategoryState,
    (state: CategoryState) => state.categories
);

export const selectError = createSelector(
    selectCategoryState,
    (state: CategoryState) => state.error
);


export const categoryFeature = createFeature({
    name: StoreEnum.categoryFeatureKey,
    reducer: categoryReducer
});
