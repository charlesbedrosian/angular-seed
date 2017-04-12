"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
var core_1 = require("@angular/core");
var jqxDockingLayoutComponent = (function () {
    function jqxDockingLayoutComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
        // jqxDockingLayoutComponent events
        this.onCreate = new core_1.EventEmitter();
        this.onDock = new core_1.EventEmitter();
        this.onFloatGroupClosed = new core_1.EventEmitter();
        this.onFloat = new core_1.EventEmitter();
        this.onPin = new core_1.EventEmitter();
        this.onResize = new core_1.EventEmitter();
        this.onUnpin = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxDockingLayoutComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDockingLayout(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDockingLayout(this.properties[i])) {
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDockingLayoutComponent.prototype.arraysEqual = function (attrValue, hostValue) {
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    jqxDockingLayoutComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDockingLayoutComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
        this.__updateRect__();
    };
    jqxDockingLayoutComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDockingLayoutComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxDockingLayoutComponent.prototype.setOptions = function (options) {
        this.host.jqxDockingLayout('setOptions', options);
    };
    // jqxDockingLayoutComponent properties
    jqxDockingLayoutComponent.prototype.contextMenu = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('contextMenu', arg);
        }
        else {
            return this.host.jqxDockingLayout('contextMenu');
        }
    };
    jqxDockingLayoutComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('height', arg);
        }
        else {
            return this.host.jqxDockingLayout('height');
        }
    };
    jqxDockingLayoutComponent.prototype.layout = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('layout', arg);
        }
        else {
            return this.host.jqxDockingLayout('layout');
        }
    };
    jqxDockingLayoutComponent.prototype.minGroupHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupHeight', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupHeight');
        }
    };
    jqxDockingLayoutComponent.prototype.minGroupWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupWidth', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupWidth');
        }
    };
    jqxDockingLayoutComponent.prototype.resizable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('resizable', arg);
        }
        else {
            return this.host.jqxDockingLayout('resizable');
        }
    };
    jqxDockingLayoutComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('rtl', arg);
        }
        else {
            return this.host.jqxDockingLayout('rtl');
        }
    };
    jqxDockingLayoutComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('theme', arg);
        }
        else {
            return this.host.jqxDockingLayout('theme');
        }
    };
    jqxDockingLayoutComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('width', arg);
        }
        else {
            return this.host.jqxDockingLayout('width');
        }
    };
    // jqxDockingLayoutComponent functions
    jqxDockingLayoutComponent.prototype.addFloatGroup = function (width, height, position, panelType, title, content, initContent) {
        this.host.jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);
    };
    jqxDockingLayoutComponent.prototype.destroy = function () {
        this.host.jqxDockingLayout('destroy');
    };
    jqxDockingLayoutComponent.prototype.loadLayout = function (layout) {
        this.host.jqxDockingLayout('loadLayout', layout);
    };
    jqxDockingLayoutComponent.prototype.refresh = function () {
        this.host.jqxDockingLayout('refresh');
    };
    jqxDockingLayoutComponent.prototype.render = function () {
        this.host.jqxDockingLayout('render');
    };
    jqxDockingLayoutComponent.prototype.saveLayout = function () {
        return this.host.jqxDockingLayout('saveLayout');
    };
    jqxDockingLayoutComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('create', function (eventData) { _this.onCreate.emit(eventData); });
        this.host.on('dock', function (eventData) { _this.onDock.emit(eventData); });
        this.host.on('floatGroupClosed', function (eventData) { _this.onFloatGroupClosed.emit(eventData); });
        this.host.on('float', function (eventData) { _this.onFloat.emit(eventData); });
        this.host.on('pin', function (eventData) { _this.onPin.emit(eventData); });
        this.host.on('resize', function (eventData) { _this.onResize.emit(eventData); });
        this.host.on('unpin', function (eventData) { _this.onUnpin.emit(eventData); });
    };
    return jqxDockingLayoutComponent;
}()); //jqxDockingLayoutComponent
__decorate([
    core_1.Input('contextMenu'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrContextMenu", void 0);
__decorate([
    core_1.Input('layout'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrLayout", void 0);
__decorate([
    core_1.Input('minGroupHeight'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrMinGroupHeight", void 0);
__decorate([
    core_1.Input('minGroupWidth'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrMinGroupWidth", void 0);
__decorate([
    core_1.Input('resizable'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrResizable", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxDockingLayoutComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onDock", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onFloatGroupClosed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onFloat", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onPin", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onResize", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDockingLayoutComponent.prototype, "onUnpin", void 0);
jqxDockingLayoutComponent = __decorate([
    core_1.Component({
        selector: 'jqxDockingLayout',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxDockingLayoutComponent);
exports.jqxDockingLayoutComponent = jqxDockingLayoutComponent;
var _a;
