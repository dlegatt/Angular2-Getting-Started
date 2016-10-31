import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // if !authService.isAuthenticated() { return false }
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid Product ID');
            this._router.navigate(['/product']);
            return false;
        }
        return true;
    }
}