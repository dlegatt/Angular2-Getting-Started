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
        var id: number;
        this._route.params.subscribe(
            params => this.getProduct(+params['id'])
        );
        console.log('init');
    }

    onBack(): void {
        this._router.navigate(['/product']);
    }

    onNext($event): void {
        this._productService.getProducts()
            .subscribe(
                products => {
                    let idx = products.indexOf(this.product);
                    if (idx+1<products.length) {
                        this._router.navigate(['/product', products[idx+1].productId]);
                    }
                    return false;
                }
            )
    }

    onPrev($event): void {
        this._productService.getProducts()
            .subscribe(
                products => {
                    let idx = products.indexOf(this.product);
                    if (idx === 0) {
                        return false;
                    }
                    this._router.navigate(['/product', products[idx-1].productId]);
                }
            )
    }

    getProduct(id: number) {
        this._productService.getProducts()
            .subscribe(
                products => this.product = products.find(
                    p => {
                        return p.productId === id;
                    }
                ),
                error => this.errorMessage = <any>error
            );
    }
}