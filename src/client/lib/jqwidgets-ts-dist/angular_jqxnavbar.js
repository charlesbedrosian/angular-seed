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
var jqxNavBarComponent = (function () {
    function jqxNavBarComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['columns', 'disabled', 'height', 'minimized', 'minimizeButtonPosition', 'minimizedHeight', 'minimizedTitle', 'orientation', 'popupAnimationDelay', 'rtl', 'selection', 'selectedItem', 'theme', 'width'];
        // jqxNavBarComponent events
        this.onChange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxNavBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavBar(this.properties[i])) {
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxNavBarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxNavBarComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxNavBarComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavBar', options);
        this.__updateRect__();
    };
    jqxNavBarComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxNavBarComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxNavBarComponent.prototype.setOptions = function (options) {
        this.host.jqxNavBar('setOptions', options);
    };
    // jqxNavBarComponent properties
    jqxNavBarComponent.prototype.columns = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('columns', arg);
        }
        else {
            return this.host.jqxNavBar('columns');
        }
    };
    jqxNavBarComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('disabled', arg);
        }
        else {
            return this.host.jqxNavBar('disabled');
        }
    };
    jqxNavBarComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('height', arg);
        }
        else {
            return this.host.jqxNavBar('height');
        }
    };
    jqxNavBarComponent.prototype.minimized = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimized', arg);
        }
        else {
            return this.host.jqxNavBar('minimized');
        }
    };
    jqxNavBarComponent.prototype.minimizeButtonPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizeButtonPosition', arg);
        }
        else {
            return this.host.jqxNavBar('minimizeButtonPosition');
        }
    };
    jqxNavBarComponent.prototype.minimizedHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedHeight', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedHeight');
        }
    };
    jqxNavBarComponent.prototype.minimizedTitle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedTitle', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedTitle');
        }
    };
    jqxNavBarComponent.prototype.orientation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('orientation', arg);
        }
        else {
            return this.host.jqxNavBar('orientation');
        }
    };
    jqxNavBarComponent.prototype.popupAnimationDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('popupAnimationDelay', arg);
        }
        else {
            return this.host.jqxNavBar('popupAnimationDelay');
        }
    };
    jqxNavBarComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('rtl', arg);
        }
        else {
            return this.host.jqxNavBar('rtl');
        }
    };
    jqxNavBarComponent.prototype.selection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selection', arg);
        }
        else {
            return this.host.jqxNavBar('selection');
        }
    };
    jqxNavBarComponent.prototype.selectedItem = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selectedItem', arg);
        }
        else {
            return this.host.jqxNavBar('selectedItem');
        }
    };
    jqxNavBarComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('theme', arg);
        }
        else {
            return this.host.jqxNavBar('theme');
        }
    };
    jqxNavBarComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('width', arg);
        }
        else {
            return this.host.jqxNavBar('width');
        }
    };
    // jqxNavBarComponent functions
    jqxNavBarComponent.prototype.close = function () {
        this.host.jqxNavBar('close');
    };
    jqxNavBarComponent.prototype.destroy = function () {
        this.host.jqxNavBar('destroy');
    };
    jqxNavBarComponent.prototype.getSelectedIndex = function () {
        return this.host.jqxNavBar('getSelectedIndex');
    };
    jqxNavBarComponent.prototype.open = function () {
        this.host.jqxNavBar('open');
    };
    jqxNavBarComponent.prototype.selectAt = function (index) {
        this.host.jqxNavBar('selectAt', index);
    };
    jqxNavBarComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    return jqxNavBarComponent;
}()); //jqxNavBarComponent
__decorate([
    core_1.Input('columns'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrColumns", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('minimized'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrMinimized", void 0);
__decorate([
    core_1.Input('minimizeButtonPosition'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrMinimizeButtonPosition", void 0);
__decorate([
    core_1.Input('minimizedHeight'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrMinimizedHeight", void 0);
__decorate([
    core_1.Input('minimizedTitle'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrMinimizedTitle", void 0);
__decorate([
    core_1.Input('orientation'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrOrientation", void 0);
__decorate([
    core_1.Input('popupAnimationDelay'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrPopupAnimationDelay", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('selection'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrSelection", void 0);
__decorate([
    core_1.Input('selectedItem'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrSelectedItem", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxNavBarComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxNavBarComponent.prototype, "onChange", void 0);
jqxNavBarComponent = __decorate([
    core_1.Component({
        selector: 'jqxNavBar',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxNavBarComponent);
exports.jqxNavBarComponent = jqxNavBarComponent;
var _a;
