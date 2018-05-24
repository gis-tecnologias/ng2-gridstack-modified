import { ElementRef, Renderer, AfterViewChecked, AfterContentChecked } from '@angular/core';
export declare class GridStackItemDirective implements AfterViewChecked, AfterContentChecked {
    private el;
    private renderer;
    x: number;
    y: number;
    w: number;
    h: number;
    customid: string;
    content: string;
    minWidth: number;
    canResize: boolean;
    private toMake;
    constructor(el: ElementRef, renderer: Renderer);
    first: boolean;
    updateView(): void;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
}
