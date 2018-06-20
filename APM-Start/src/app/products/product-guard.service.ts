import { Injectable } from "@angular/core";
import { ProductEditComponent } from "./product-edit.component";
import { CanDeactivate } from "@angular/router";

@Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {

    canDeactivate(component: ProductEditComponent): boolean {
        if (component.isDirty) {
            let productName = component.product.productName || 'New Product';
            return confirm(`Navigate away and lose all changes to ${productName}?`);
        }
        return true;
    }
}
