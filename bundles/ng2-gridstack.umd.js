(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.gridstack = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    __decorate$1([
        core.Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "x", void 0);
    __decorate$1([
        core.Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "y", void 0);
    __decorate$1([
        core.Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "w", void 0);
    __decorate$1([
        core.Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "h", void 0);
    __decorate$1([
        core.Input(),
        __metadata("design:type", String)
    ], GridStackItemDirective.prototype, "customid", void 0);
    __decorate$1([
        core.Input(),
        __metadata("design:type", String)
    ], GridStackItemDirective.prototype, "content", void 0);
    __decorate$1([
        core.Input(),
        __metadata("design:type", Number)
    ], GridStackItemDirective.prototype, "minWidth", void 0);
    __decorate$1([
        core.Input(),
        __metadata("design:type", Boolean)
    ], GridStackItemDirective.prototype, "canResize", void 0);
    GridStackItemDirective = __decorate$1([
        core.Component({
            selector: 'gridStackItem',
            template: "\n    <div class=\"grid-stack-item-content\">\n        <ng-content></ng-content>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [core.ElementRef,
            core.Renderer])
    ], GridStackItemDirective);
    return GridStackItemDirective;
}());

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//declare var $: any; // JQuery
var $$1 = require('jquery');
var GridStackComponent = /** @class */ (function () {
    function GridStackComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.buttonClass = "";
        this.allowEditing = false;
        this.addFunction = new core.EventEmitter();
        this.saveFunction = new core.EventEmitter();
        this.deleteFunction = new core.EventEmitter();
        this.deleteCardFunc = new core.EventEmitter();
        this.resizeStop = new core.EventEmitter();
        this.change = new core.EventEmitter();
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
        $$1(nativeElement).find(".grid-stack")
            .gridstack(this.options)
            .on('gsresizestop', function (event, item) {
            _this.emmit(_this.resizeStop, event, item);
        })
            .on('change', function (event, item) {
            _this.emmit(_this.change, event, item);
        });
    };
    GridStackComponent.prototype.onItemClick = function (event) {
        var grid = $$1('.grid-stack').data('gridstack');
        var element = $$1(event.target);
        if (element.hasClass("grid-stack-item-content")) {
            if (!element.hasClass("selected-item")) {
                $$1(".grid-stack-item-content").removeClass("selected-item");
                element.addClass("selected-item");
                $$1(".card-management").show();
                if (this.allowEditing) {
                    this.editing = true;
                    element.attr("contenteditable", "true");
                    $$1('.grid-stack').data('gridstack').disable();
                }
            }
            else {
                element.removeClass("selected-item");
                $$1(".card-management").hide();
                $$1('.grid-stack').data('gridstack').enable();
                element.attr("contenteditable", "false");
                this.editing = false;
            }
        }
    };
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", Number)
    ], GridStackComponent.prototype, "w", void 0);
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", Boolean)
    ], GridStackComponent.prototype, "animate", void 0);
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", String)
    ], GridStackComponent.prototype, "buttonClass", void 0);
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", Boolean)
    ], GridStackComponent.prototype, "allowEditing", void 0);
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", Array)
    ], GridStackComponent.prototype, "options", void 0);
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", String)
    ], GridStackComponent.prototype, "addButtonText", void 0);
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", String)
    ], GridStackComponent.prototype, "saveButtonText", void 0);
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", String)
    ], GridStackComponent.prototype, "deleteButtonText", void 0);
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", String)
    ], GridStackComponent.prototype, "deleteCardButtonText", void 0);
    __decorate$2([
        core.Output(),
        __metadata$1("design:type", Object)
    ], GridStackComponent.prototype, "addFunction", void 0);
    __decorate$2([
        core.Output(),
        __metadata$1("design:type", Object)
    ], GridStackComponent.prototype, "saveFunction", void 0);
    __decorate$2([
        core.Output(),
        __metadata$1("design:type", Object)
    ], GridStackComponent.prototype, "deleteFunction", void 0);
    __decorate$2([
        core.Output(),
        __metadata$1("design:type", Object)
    ], GridStackComponent.prototype, "deleteCardFunc", void 0);
    __decorate$2([
        core.Output(),
        __metadata$1("design:type", Object)
    ], GridStackComponent.prototype, "resizeStop", void 0);
    __decorate$2([
        core.Output(),
        __metadata$1("design:type", Object)
    ], GridStackComponent.prototype, "change", void 0);
    __decorate$2([
        core.Input(),
        __metadata$1("design:type", Array)
    ], GridStackComponent.prototype, "items", void 0);
    GridStackComponent = __decorate$2([
        core.Component({
            selector: 'gridStack',
            template: "\n    <div class=\"grid-stack\" [attr.data-gs-width]=\"w\" [attr.data-gs-animate]=\"animate\">\n    <ng-content > </ng-content>\n    </div>"
        }),
        __metadata$1("design:paramtypes", [core.ElementRef,
            core.Renderer])
    ], GridStackComponent);
    return GridStackComponent;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GridStackModule = /** @class */ (function () {
    function GridStackModule() {
    }
    GridStackModule = __decorate([
        core.NgModule({
            declarations: [
                GridStackComponent,
                GridStackItemDirective
            ],
            imports: [
                common.CommonModule
            ],
            exports: [
                GridStackComponent,
                GridStackItemDirective
            ],
        })
    ], GridStackModule);
    return GridStackModule;
}());

require("../vendor/gridstack.all.js");

exports.GridStackModule = GridStackModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-gridstack.umd.js.map
