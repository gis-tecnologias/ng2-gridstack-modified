var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, ElementRef, Renderer } from '@angular/core';
//declare var $: any; // JQuery
var $ = require('jquery');
var GridStackComponent = /** @class */ (function () {
    function GridStackComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.buttonClass = "";
        this.allowEditing = false;
        this.addFunction = new EventEmitter();
        this.saveFunction = new EventEmitter();
        this.deleteFunction = new EventEmitter();
        this.deleteCardFunc = new EventEmitter();
        this.resizeStop = new EventEmitter();
        this.change = new EventEmitter();
        this.isStart = true;
        this.editing = false;
        this.emmit = function (emitter, event, item) {
            emitter.emit({
                event: event,
                item: item
            });
        };
    }
    GridStackComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var nativeElement = this.el.nativeElement;
        $(nativeElement).find(".grid-stack")
            .gridstack(this.options)
            .on('gsresizestop', function (event, item) {
            _this.emmit(_this.resizeStop, event, item);
        })
            .on('change', function (event, item) {
            _this.emmit(_this.change, event, item);
        });
    };
    GridStackComponent.prototype.onItemClick = function (event) {
        var grid = $('.grid-stack').data('gridstack');
        var element = $(event.target);
        if (element.hasClass("grid-stack-item-content")) {
            if (!element.hasClass("selected-item")) {
                $(".grid-stack-item-content").removeClass("selected-item");
                element.addClass("selected-item");
                $(".card-management").show();
                if (this.allowEditing) {
                    this.editing = true;
                    element.attr("contenteditable", "true");
                    $('.grid-stack').data('gridstack').disable();
                }
            }
            else {
                element.removeClass("selected-item");
                $(".card-management").hide();
                $('.grid-stack').data('gridstack').enable();
                element.attr("contenteditable", "false");
                this.editing = false;
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GridStackComponent.prototype, "w", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], GridStackComponent.prototype, "animate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GridStackComponent.prototype, "buttonClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], GridStackComponent.prototype, "allowEditing", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], GridStackComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GridStackComponent.prototype, "addButtonText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GridStackComponent.prototype, "saveButtonText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GridStackComponent.prototype, "deleteButtonText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GridStackComponent.prototype, "deleteCardButtonText", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], GridStackComponent.prototype, "addFunction", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], GridStackComponent.prototype, "saveFunction", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], GridStackComponent.prototype, "deleteFunction", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], GridStackComponent.prototype, "deleteCardFunc", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], GridStackComponent.prototype, "resizeStop", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], GridStackComponent.prototype, "change", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], GridStackComponent.prototype, "items", void 0);
    GridStackComponent = __decorate([
        Component({
            selector: 'gridStack',
            template: "\n    <div class=\"grid-stack\" [attr.data-gs-width]=\"w\" [attr.data-gs-animate]=\"animate\">\n    <ng-content > </ng-content>\n    </div>"
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer])
    ], GridStackComponent);
    return GridStackComponent;
}());
export { GridStackComponent };
//# sourceMappingURL=gridstack.component.js.map