import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";
import { Product, getProductForCategory } from "./product.action";




export interface ProductState {
    products: Product[];
    productCount: number;
    error: string;
}

export const initialState: ProductState = {
    products: [],
    productCount: 0,
    error: ''
}

export const productReducer = createReducer(
    initialState,
    // on(getProductForCategory.getProduct, (state, action) => {
    //     return {
    //         ...state,
    //         products: state.products,
    //         productCount: state.productCount,
    //         error: ''
    //     }
    // }),

    on(getProductForCategory.getProductSuccess, (state, action) => {
        return {
            ...state,
            products: action.products,
            productCount: action.products.length,
            error: ''
        }
    }),

    on(getProductForCategory.getProductFailure, (state, action) => {
        return {
            ...state,
            products: [],
            productCount: 0,
            error: action.error
        }
    })
)