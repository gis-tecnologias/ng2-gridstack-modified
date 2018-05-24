var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ElementRef, Input, Renderer, Component } from '@angular/core';
//declare var $: any; // JQuery
var $ = require('jquery');
var GridStackItemDirective = /** @class */ (function () {
    function GridStackItemDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.toMake = true;
        this.first = true;
        renderer.setElementAttribute(el.nativeElement, "class", "grid-stack-item");
    }
    GridStackItemDirective.prototype.updateView = function () {
        var renderer = this.renderer;
        var nativeElement = this.el.nativeElement;
        var cannotResize = this.canResize ? "yes" : "no";
        renderer.setElementAttribute(nativeElement, "data-gs-x", String(this.x));
        renderer.setElementAttribute(nativeElement, "data-gs-y", String(this.y));
        renderer.setElementAttribute(nativeElement, "data-gs-width", String(this.w));
        renderer.setElementAttribute(nativeElement, "data-gs-height", String(this.h));
        if (this.customid) {
            renderer.setElementAttribute(nativeElement, "data-custom-id", String(this.customid));
        }
        if (this.minWidth) {
            renderer.setElementAttribute(nativeElement, "data-gs-min-width", String(this.minWidth));
        }
        if (cannotResize == "yes") {
            renderer.setElementAttribute(nativeElement, "data-gs-no-resize", cannotResize);
        }
        var parent = $(this.el.nativeElement).parent();
        var grid = parent.data('gridstack');
        if (grid && this.toMake) {
            grid.makeWidget(this.el.nativeElement);
            this.toMake = false;
        }
        if (this.first) {
            this.first = false;
        }
    };
    GridStackItemDirective.prototype.ngAfterContentChecked = function () {
        if (this.first)
            this.updateView();
    };
    GridStackItemDirective.prototype.ngAfterViewChecked = function () {
        if (this.first)
            this.updateView();
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "x", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "y", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "w", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "h", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GridStackItemDirective.prototype, "customid", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GridStackItemDirective.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "minWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], GridStackItemDirective.prototype, "canResize", void 0);
    GridStackItemDirective = __decorate([
        Component({
            selector: 'gridStackItem',
            template: "\n    <div class=\"grid-stack-item-content\">\n        <ng-content></ng-content>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer])
    ], GridStackItemDirective);
    return GridStackItemDirective;
}());
export { GridStackItemDirective };
//# sourceMappingURL=gridstack.item.directive.js.map