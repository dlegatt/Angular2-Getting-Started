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
        console.log(this._route.snapshot.params['id']);
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this.getProduct(id);
    }

    onBack(): void {
        this._router.navigate(['/product']);
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error
            );
    }
}