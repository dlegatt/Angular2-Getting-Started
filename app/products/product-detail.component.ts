import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _productService: ProductService,
                private _router: Router) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.getProduct(id);
    }

    onBack(): void {
        this._router.navigate(['/product']);
    }

    getProduct(id: number) {
        this._productService.getProducts()
            .subscribe(
                products => this.product = products.find(
                    p => p.productId === id
                ),
                error => this.errorMessage = <any>error
            );
    }
}