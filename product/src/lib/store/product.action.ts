import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

//export const getProductForCategory = createAction('[Product] Get Product');

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
}


export const getProductForCategory = createActionGroup({
    source: '[Product] Get Product',
    events: {
        'Get All products': emptyProps(),
        'Get Product By Category': props<{ categoryName: string }>(),
        'Get Product Success': props<{ products: Product[] }>(),
        'Get Product Failure': props<{ error: string }>(),
    }
});