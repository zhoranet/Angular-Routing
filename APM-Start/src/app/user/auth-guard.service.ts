import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()

export  class AuthGuard implements CanActivate{
    
    constructor(
        private authService: AuthService,
        private router: Router) {
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('In canActivate: ' + state.url);
        return this.checkLoggedIn(state.url);
    }

    checkLoggedIn(url: string): boolean {
        
        console.log('checkLoggedIn: ' + url);

        this.authService.redirectUrl = url;

        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Retain the attempted URL for redirection
        
        this.router.navigate(['/login']);
        return false;
    }

}