import { PipeTransform, Pipe } from '@angular/core';
import {ProductInterface} from "./product";

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform
{
    transform(value: ProductInterface[], filterBy: string): ProductInterface[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: ProductInterface) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}