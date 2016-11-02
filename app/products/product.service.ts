import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {IProduct} from "./product";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

@Injectable()
export class ProductService {

    private _productUrl = 'http://localhost:8000/api.php/product';
    private _products: IProduct[];
    private _observable: Observable<IProduct[]>;
    constructor(private _http: Http){}

    getProduct(id: number): Observable<IProduct>{
        if (!this._products){
            this._fetchProducts().subscribe(
                products => console.log(products),
                error => console.log(error)
            );
        } else {
            return Observable.of(this._products.find(p => p.productId === id));
        }
    }

    getProducts(): Observable<IProduct[]> {
        if (this._products) {
            return Observable.of(this._products);
        } else if (this._observable) {
            return this._observable;
        } else {
            return this._fetchProducts();
        }
    }

    private _fetchProducts(): Observable<IProduct[]> {
        this._observable = this._http.get(this._productUrl)
            .map(function (response: Response) {
                return <IProduct[]> response.json()
            })
            .do(
                val => {
                    this._products = val;
                    this._observable = null;
                }
            )
            .catch(this.handleError)
            .share();
        return this._observable;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error ||'Server Error');
    }
}
