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
var jqxResponsivePanelComponent = (function () {
    function jqxResponsivePanelComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['animationDirection', 'animationHideDelay', 'animationShowDelay', 'animationType', 'autoClose', 'collapseBreakpoint', 'collapseWidth', 'height', 'initContent', 'theme', 'toggleButton', 'toggleButtonSize', 'width'];
        // jqxResponsivePanelComponent events
        this.onClose = new core_1.EventEmitter();
        this.onCollapse = new core_1.EventEmitter();
        this.onExpand = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxResponsivePanelComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxResponsivePanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxResponsivePanel(this.properties[i])) {
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxResponsivePanelComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxResponsivePanelComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxResponsivePanelComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
        this.__updateRect__();
    };
    jqxResponsivePanelComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxResponsivePanelComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxResponsivePanelComponent.prototype.setOptions = function (options) {
        this.host.jqxResponsivePanel('setOptions', options);
    };
    // jqxResponsivePanelComponent properties
    jqxResponsivePanelComponent.prototype.animationDirection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationDirection', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationDirection');
        }
    };
    jqxResponsivePanelComponent.prototype.animationHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationHideDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationHideDelay');
        }
    };
    jqxResponsivePanelComponent.prototype.animationShowDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationShowDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationShowDelay');
        }
    };
    jqxResponsivePanelComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationType', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationType');
        }
    };
    jqxResponsivePanelComponent.prototype.autoClose = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('autoClose', arg);
        }
        else {
            return this.host.jqxResponsivePanel('autoClose');
        }
    };
    jqxResponsivePanelComponent.prototype.collapseBreakpoint = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseBreakpoint', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseBreakpoint');
        }
    };
    jqxResponsivePanelComponent.prototype.collapseWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseWidth', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseWidth');
        }
    };
    jqxResponsivePanelComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('height', arg);
        }
        else {
            return this.host.jqxResponsivePanel('height');
        }
    };
    jqxResponsivePanelComponent.prototype.initContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('initContent', arg);
        }
        else {
            return this.host.jqxResponsivePanel('initContent');
        }
    };
    jqxResponsivePanelComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('theme', arg);
        }
        else {
            return this.host.jqxResponsivePanel('theme');
        }
    };
    jqxResponsivePanelComponent.prototype.toggleButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButton', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButton');
        }
    };
    jqxResponsivePanelComponent.prototype.toggleButtonSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButtonSize', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButtonSize');
        }
    };
    jqxResponsivePanelComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('width', arg);
        }
        else {
            return this.host.jqxResponsivePanel('width');
        }
    };
    // jqxResponsivePanelComponent functions
    jqxResponsivePanelComponent.prototype.close = function () {
        this.host.jqxResponsivePanel('close');
    };
    jqxResponsivePanelComponent.prototype.destroy = function () {
        this.host.jqxResponsivePanel('destroy');
    };
    jqxResponsivePanelComponent.prototype.isCollapsed = function () {
        return this.host.jqxResponsivePanel('isCollapsed');
    };
    jqxResponsivePanelComponent.prototype.isOpened = function () {
        return this.host.jqxResponsivePanel('isOpened');
    };
    jqxResponsivePanelComponent.prototype.open = function () {
        this.host.jqxResponsivePanel('open');
    };
    jqxResponsivePanelComponent.prototype.refresh = function () {
        this.host.jqxResponsivePanel('refresh');
    };
    jqxResponsivePanelComponent.prototype.render = function () {
        this.host.jqxResponsivePanel('render');
    };
    jqxResponsivePanelComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
        this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    return jqxResponsivePanelComponent;
}()); //jqxResponsivePanelComponent
__decorate([
    core_1.Input('animationDirection'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrAnimationDirection", void 0);
__decorate([
    core_1.Input('animationHideDelay'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrAnimationHideDelay", void 0);
__decorate([
    core_1.Input('animationShowDelay'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrAnimationShowDelay", void 0);
__decorate([
    core_1.Input('animationType'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrAnimationType", void 0);
__decorate([
    core_1.Input('autoClose'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrAutoClose", void 0);
__decorate([
    core_1.Input('collapseBreakpoint'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrCollapseBreakpoint", void 0);
__decorate([
    core_1.Input('collapseWidth'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrCollapseWidth", void 0);
__decorate([
    core_1.Input('initContent'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrInitContent", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('toggleButton'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrToggleButton", void 0);
__decorate([
    core_1.Input('toggleButtonSize'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrToggleButtonSize", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxResponsivePanelComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onCollapse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onExpand", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onOpen", void 0);
jqxResponsivePanelComponent = __decorate([
    core_1.Component({
        selector: 'jqxResponsivePanel',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxResponsivePanelComponent);
exports.jqxResponsivePanelComponent = jqxResponsivePanelComponent;
var _a;
