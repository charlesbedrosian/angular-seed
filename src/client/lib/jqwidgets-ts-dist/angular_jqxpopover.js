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
var jqxPopoverComponent = (function () {
    function jqxPopoverComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['arrowOffsetValue', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'animationType', 'height', 'initContent', 'isModal', 'offset', 'position', 'rtl', 'selector', 'showArrow', 'showCloseButton', 'width', 'title', 'theme'];
        // jqxPopoverComponent events
        this.onClose = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxPopoverComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPopover(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPopover(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPopover(this.properties[i])) {
                        this.host.jqxPopover(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxPopoverComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxPopoverComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxPopoverComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPopover', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
        this.__updateRect__();
    };
    jqxPopoverComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxPopoverComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxPopoverComponent.prototype.setOptions = function (options) {
        this.host.jqxPopover('setOptions', options);
    };
    // jqxPopoverComponent properties
    jqxPopoverComponent.prototype.arrowOffsetValue = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('arrowOffsetValue', arg);
        }
        else {
            return this.host.jqxPopover('arrowOffsetValue');
        }
    };
    jqxPopoverComponent.prototype.animationOpenDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationOpenDelay');
        }
    };
    jqxPopoverComponent.prototype.animationCloseDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationCloseDelay');
        }
    };
    jqxPopoverComponent.prototype.autoClose = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('autoClose', arg);
        }
        else {
            return this.host.jqxPopover('autoClose');
        }
    };
    jqxPopoverComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationType', arg);
        }
        else {
            return this.host.jqxPopover('animationType');
        }
    };
    jqxPopoverComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('height', arg);
        }
        else {
            return this.host.jqxPopover('height');
        }
    };
    jqxPopoverComponent.prototype.initContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('initContent', arg);
        }
        else {
            return this.host.jqxPopover('initContent');
        }
    };
    jqxPopoverComponent.prototype.isModal = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('isModal', arg);
        }
        else {
            return this.host.jqxPopover('isModal');
        }
    };
    jqxPopoverComponent.prototype.offset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('offset', arg);
        }
        else {
            return this.host.jqxPopover('offset');
        }
    };
    jqxPopoverComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('position', arg);
        }
        else {
            return this.host.jqxPopover('position');
        }
    };
    jqxPopoverComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('rtl', arg);
        }
        else {
            return this.host.jqxPopover('rtl');
        }
    };
    jqxPopoverComponent.prototype.selector = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('selector', arg);
        }
        else {
            return this.host.jqxPopover('selector');
        }
    };
    jqxPopoverComponent.prototype.showArrow = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showArrow', arg);
        }
        else {
            return this.host.jqxPopover('showArrow');
        }
    };
    jqxPopoverComponent.prototype.showCloseButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showCloseButton', arg);
        }
        else {
            return this.host.jqxPopover('showCloseButton');
        }
    };
    jqxPopoverComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('width', arg);
        }
        else {
            return this.host.jqxPopover('width');
        }
    };
    jqxPopoverComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('title', arg);
        }
        else {
            return this.host.jqxPopover('title');
        }
    };
    jqxPopoverComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('theme', arg);
        }
        else {
            return this.host.jqxPopover('theme');
        }
    };
    // jqxPopoverComponent functions
    jqxPopoverComponent.prototype.close = function () {
        this.host.jqxPopover('close');
    };
    jqxPopoverComponent.prototype.destroy = function () {
        this.host.jqxPopover('destroy');
    };
    jqxPopoverComponent.prototype.open = function () {
        this.host.jqxPopover('open');
    };
    jqxPopoverComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        setTimeout(function () {
            _this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            _this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        });
    };
    return jqxPopoverComponent;
}()); //jqxPopoverComponent
__decorate([
    core_1.Input('arrowOffsetValue'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrArrowOffsetValue", void 0);
__decorate([
    core_1.Input('animationOpenDelay'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrAnimationOpenDelay", void 0);
__decorate([
    core_1.Input('animationCloseDelay'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrAnimationCloseDelay", void 0);
__decorate([
    core_1.Input('autoClose'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrAutoClose", void 0);
__decorate([
    core_1.Input('animationType'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrAnimationType", void 0);
__decorate([
    core_1.Input('initContent'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrInitContent", void 0);
__decorate([
    core_1.Input('isModal'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrIsModal", void 0);
__decorate([
    core_1.Input('offset'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrOffset", void 0);
__decorate([
    core_1.Input('position'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrPosition", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('selector'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrSelector", void 0);
__decorate([
    core_1.Input('showArrow'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrShowArrow", void 0);
__decorate([
    core_1.Input('showCloseButton'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrShowCloseButton", void 0);
__decorate([
    core_1.Input('title'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrTitle", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxPopoverComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "onOpen", void 0);
jqxPopoverComponent = __decorate([
    core_1.Component({
        selector: 'jqxPopover',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxPopoverComponent);
exports.jqxPopoverComponent = jqxPopoverComponent;
var _a;
