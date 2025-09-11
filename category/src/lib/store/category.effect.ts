import { inject, Injectable } from "@angular/core";
import { Categories } from "../categories";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { categoryActions, categoryActionsSuccess } from "./category.action";


@Injectable()
export class CategoryEffect {


    private readonly categories = inject(Categories);
    private readonly actions$ = inject(Actions);

    loadCategories$ = createEffect(() => this.actions$.pipe(
        ofType(categoryActions),
        exhaustMap(() => this.categories.getCategories().pipe(
            map(categories => categoryActionsSuccess(categories)),
            catchError(() => EMPTY)
            // catchError(error => [{ type: '[Category] Load Categories Failure', error }])
        ))
    ))
}