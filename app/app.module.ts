import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule
        ,HttpModule
        ,FormsModule
    ],
    declarations: [
        AppComponent,
        ProductFilterPipe,
        StarComponent,
        ProductListComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
