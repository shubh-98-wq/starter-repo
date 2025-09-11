import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { productFeature, loadProducts, loadProductsByCatgory } from '@org/product';




export const appRoutes: Route[] = [
    {
        path: '', redirectTo: 'product', pathMatch: 'full'
    },
    {
        path: 'product', loadComponent: () => import('@org/product').then(m => m.Product),
        providers: [
            provideState(productFeature),
            provideEffects({ loadProducts, loadProductsByCatgory }),
        ]
    },
    {
        path: 'product/:categoryName', loadComponent: () => import('@org/product').then(m => m.Product),
        providers: [
            provideState(productFeature),
            provideEffects({ loadProducts, loadProductsByCatgory }),
        ]
    },
];
