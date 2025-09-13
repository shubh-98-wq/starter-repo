import { inject } from "@angular/core";
import { CanActivateFn, CanMatchFn, Router } from "@angular/router";
import { Auth } from "../auth";

export const loginGuard: CanMatchFn = (route, state) => {
    console.log('inside login guard', route, state);
    const isloogedIn = inject(Auth).isloggedIn;
    const routefn = inject(Router);
    if (!isloogedIn) {
        routefn.navigate(['/auth']);
        return false;
    }

    return true;
}
