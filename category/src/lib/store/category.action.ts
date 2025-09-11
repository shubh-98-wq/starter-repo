import { createAction } from '@ngrx/store';
export const categoryActions = createAction('[Category] Load Categories');
export const categoryActionsSuccess = createAction(
    '[Category] Load Categories Success',
    (categories: string[]) => ({ categories })
);
export const categoryActionsFailure = createAction(
    '[Category] Load Categories Failure',
    (error: string) => ({ error })
);