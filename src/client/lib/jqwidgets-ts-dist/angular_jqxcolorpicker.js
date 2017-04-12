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
var jqxColorPickerComponent = (function () {
    function jqxColorPickerComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['color', 'colorMode', 'disabled', 'height', 'showTransparent', 'width'];
        // jqxColorPickerComponent events
        this.onColorchange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxColorPickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxColorPicker(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxColorPicker(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxColorPicker(this.properties[i])) {
                        this.host.jqxColorPicker(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxColorPickerComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxColorPickerComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxColorPickerComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxColorPicker', options);
        this.__updateRect__();
    };
    jqxColorPickerComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxColorPickerComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxColorPickerComponent.prototype.setOptions = function (options) {
        this.host.jqxColorPicker('setOptions', options);
    };
    // jqxColorPickerComponent properties
    jqxColorPickerComponent.prototype.color = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('color', arg);
        }
        else {
            return this.host.jqxColorPicker('color');
        }
    };
    jqxColorPickerComponent.prototype.colorMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('colorMode', arg);
        }
        else {
            return this.host.jqxColorPicker('colorMode');
        }
    };
    jqxColorPickerComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('disabled', arg);
        }
        else {
            return this.host.jqxColorPicker('disabled');
        }
    };
    jqxColorPickerComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('height', arg);
        }
        else {
            return this.host.jqxColorPicker('height');
        }
    };
    jqxColorPickerComponent.prototype.showTransparent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('showTransparent', arg);
        }
        else {
            return this.host.jqxColorPicker('showTransparent');
        }
    };
    jqxColorPickerComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('width', arg);
        }
        else {
            return this.host.jqxColorPicker('width');
        }
    };
    // jqxColorPickerComponent functions
    jqxColorPickerComponent.prototype.getColor = function () {
        return this.host.jqxColorPicker('getColor');
    };
    jqxColorPickerComponent.prototype.setColor = function (color) {
        this.host.jqxColorPicker('setColor', color);
    };
    jqxColorPickerComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('colorchange', function (eventData) { _this.onColorchange.emit(eventData); });
    };
    return jqxColorPickerComponent;
}()); //jqxColorPickerComponent
__decorate([
    core_1.Input('color'),
    __metadata("design:type", Object)
], jqxColorPickerComponent.prototype, "attrColor", void 0);
__decorate([
    core_1.Input('colorMode'),
    __metadata("design:type", Object)
], jqxColorPickerComponent.prototype, "attrColorMode", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxColorPickerComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('showTransparent'),
    __metadata("design:type", Object)
], jqxColorPickerComponent.prototype, "attrShowTransparent", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxColorPickerComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxColorPickerComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxColorPickerComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxColorPickerComponent.prototype, "onColorchange", void 0);
jqxColorPickerComponent = __decorate([
    core_1.Component({
        selector: 'jqxColorPicker',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxColorPickerComponent);
exports.jqxColorPickerComponent = jqxColorPickerComponent;
var _a;
