import { EventEmitter, ElementRef, Renderer } from '@angular/core';
export declare class GridStackComponent {
    private el;
    private renderer;
    w: number;
    animate: boolean;
    buttonClass: string;
    allowEditing: boolean;
    options: any[];
    addButtonText: string;
    saveButtonText: string;
    deleteButtonText: string;
    deleteCardButtonText: string;
    addFunction: EventEmitter<boolean>;
    saveFunction: EventEmitter<any>;
    deleteFunction: EventEmitter<boolean>;
    deleteCardFunc: EventEmitter<number>;
    resizeStop: EventEmitter<any>;
    change: EventEmitter<any>;
    items: any[];
    private isStart;
    private editing;
    constructor(el: ElementRef, renderer: Renderer);
    private emmit;
    ngAfterViewInit(): void;
    onItemClick(event: any): void;
}
