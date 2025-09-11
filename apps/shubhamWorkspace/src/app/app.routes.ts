import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { productFeature, loadProducts, loadProductsByCatgory } from '@org/product';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { cartFeature, loadCarts } from '@org/cart';
import { MainNavComponent } from './main-nav/main-nav.component';




export const appRoutes: Route[] = [
    {
        path: '', redirectTo: 'auth', pathMatch: 'full'
    },
    {
        path: 'auth', loadComponent: () => import('@org/login').then(m => m.Login)
    },
    {
        path: 'dashboard',
        component: MainNavComponent,
        children: [
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
            {
                path: 'cart', loadComponent: () => import('@org/cart').then(m => m.Cart),
                providers: [
                    provideState(cartFeature),
                    provideEffects({ loadCarts }),
                ]
            }
        ]
    }
];
