import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {StarComponent} from "./shared/star.component";
import {ProductDetailComponent} from "./products/product-detail.component";
import {WelcomeComponent} from "./home/welcome.component";

@NgModule({
    imports: [
        BrowserModule
        ,HttpModule
        ,FormsModule
        ,RouterModule.forRoot([
            { path: 'product', component: ProductListComponent }
            ,{ path: 'product/:id', component: ProductDetailComponent }
            ,{ path: 'welcome', component: WelcomeComponent }
            ,{ path: '', redirectTo: 'welcome', pathMatch: 'full' }
            ,{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ])
    ],
    declarations: [
        AppComponent,
        ProductFilterPipe,
        StarComponent,
        ProductDetailComponent,
        ProductListComponent
        ,WelcomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
