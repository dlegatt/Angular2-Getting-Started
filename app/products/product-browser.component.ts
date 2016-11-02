import {Component, Output, EventEmitter } from "@angular/core";
@Component({
    selector: 'product-browser',
    templateUrl: 'product-browser.component.html',
    moduleId: module.id
})
export class ProductBrowserComponent {
    @Output() prevClicked: EventEmitter<string> = new EventEmitter<string>();
    @Output() nextClicked: EventEmitter<string> = new EventEmitter<string>();

    onNext(): void {
        this.nextClicked.emit('next');
    }

    onPrev(): void {
        this.prevClicked.emit('prev');
    }
}