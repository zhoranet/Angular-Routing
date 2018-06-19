import { Injectable } from "@angular/core";
import { ProductEditComponent } from "./product-edit.component";
import { CanDeactivate } from "@angular/router";

@Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {

    canDeactivate(component: ProductEditComponent): boolean {        
        return true;
    }
}
