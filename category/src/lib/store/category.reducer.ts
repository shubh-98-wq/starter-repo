import { createReducer, on } from "@ngrx/store";
import { categoryActionsFailure, categoryActionsSuccess } from "./category.action";


export interface CategoryState {
    categories: string[];
    currentCategory: string;
    error: string
}

const initialState: CategoryState = {
    categories: [],
    currentCategory: '',
    error: ''
}


export const categoryReducer = createReducer(
    initialState,
    on(categoryActionsSuccess, (state, actions) => {
        return {
            ...state,
            categories: actions.categories,
            error: '',
        }
    }),

    on(categoryActionsFailure, (state, actions) => {
        return {
            ...state,
            categories: [],
            error: actions.error,
        }
    })
);

// export const categoryReducer = createReducer(
//     initialState,
//     on(categoryActions, (state, actions) => ({
//         return {
//             ...state,
//             categories:state.categories
//         }
//     })
// )