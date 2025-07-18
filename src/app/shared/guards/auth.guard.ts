import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, GuardResult, MaybeAsync } from '@angular/router';
import { SafeStorage } from '../../../core/services/safe-storage';
import { LOCAL_STORAGE } from '../../shared/constants/local-storage';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private safeStorage: SafeStorage) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        // Allow access by default; replace with your auth logic as needed
        let isLoggedIn = this.safeStorage.get(LOCAL_STORAGE.IS_LOGGED_IN);
        console.log('AuthGuard: isLoggedIn:', isLoggedIn);
        if(isLoggedIn === 'false' || isLoggedIn === null) {
            // Redirect to login if not logged in
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }

        return true;
    }
}