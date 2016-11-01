import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {IProduct} from "./product";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private _productUrl = 'http://10.1.40.182:8000/api.php/product';

    constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map(function(response: Response) { return <IProduct[]> response.json() })
            .do(data => console.log('Data retrieved from server'))
            .catch(this.handleError);
    }
    getProduct(id: number): Observable<IProduct>{
        return this._http.get(this._productUrl + '/' + id)
            .map((response: Response) => <IProduct> response.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error ||'Server Error');
    }
}
