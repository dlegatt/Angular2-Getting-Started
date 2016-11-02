"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _productService, _router) {
        this._route = _route;
        this._productService = _productService;
        this._router = _router;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this._route.params.subscribe(function (params) { return _this.getProduct(+params['id']); });
        console.log('init');
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/product']);
    };
    ProductDetailComponent.prototype.onNext = function ($event) {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) {
            var idx = products.indexOf(_this.product);
            if (idx + 1 < products.length) {
                _this._router.navigate(['/product', products[idx + 1].productId]);
            }
            return false;
        });
    };
    ProductDetailComponent.prototype.onPrev = function ($event) {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) {
            var idx = products.indexOf(_this.product);
            if (idx === 0) {
                return false;
            }
            _this._router.navigate(['/product', products[idx - 1].productId]);
        });
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.product = products.find(function (p) {
            return p.productId === id;
        }); }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/product-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_service_1.ProductService, router_1.Router])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map