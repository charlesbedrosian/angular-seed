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
var forms_1 = require("@angular/forms");
var noop = function () { };
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return jqxSwitchButtonComponent; }),
    multi: true
};
var jqxSwitchButtonComponent = (function () {
    function jqxSwitchButtonComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['checked', 'disabled', 'height', 'orientation', 'onLabel', 'offLabel', 'thumbSize', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxSwitchButtonComponent events
        this.onChecked = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.onUnchecked = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxSwitchButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSwitchButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSwitchButton(this.properties[i])) {
                        this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxSwitchButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxSwitchButtonComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxSwitchButtonComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSwitchButton', options);
        this.__updateRect__();
    };
    jqxSwitchButtonComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxSwitchButtonComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxSwitchButtonComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxSwitchButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxSwitchButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxSwitchButtonComponent.prototype.setOptions = function (options) {
        this.host.jqxSwitchButton('setOptions', options);
    };
    // jqxSwitchButtonComponent properties
    jqxSwitchButtonComponent.prototype.checked = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('checked', arg);
        }
        else {
            return this.host.jqxSwitchButton('checked');
        }
    };
    jqxSwitchButtonComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('disabled', arg);
        }
        else {
            return this.host.jqxSwitchButton('disabled');
        }
    };
    jqxSwitchButtonComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('height', arg);
        }
        else {
            return this.host.jqxSwitchButton('height');
        }
    };
    jqxSwitchButtonComponent.prototype.orientation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('orientation', arg);
        }
        else {
            return this.host.jqxSwitchButton('orientation');
        }
    };
    jqxSwitchButtonComponent.prototype.onLabel = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('onLabel', arg);
        }
        else {
            return this.host.jqxSwitchButton('onLabel');
        }
    };
    jqxSwitchButtonComponent.prototype.offLabel = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('offLabel', arg);
        }
        else {
            return this.host.jqxSwitchButton('offLabel');
        }
    };
    jqxSwitchButtonComponent.prototype.thumbSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('thumbSize', arg);
        }
        else {
            return this.host.jqxSwitchButton('thumbSize');
        }
    };
    jqxSwitchButtonComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('width', arg);
        }
        else {
            return this.host.jqxSwitchButton('width');
        }
    };
    // jqxSwitchButtonComponent functions
    jqxSwitchButtonComponent.prototype.check = function () {
        this.host.jqxSwitchButton('check');
    };
    jqxSwitchButtonComponent.prototype.disable = function () {
        this.host.jqxSwitchButton('disable');
    };
    jqxSwitchButtonComponent.prototype.enable = function () {
        this.host.jqxSwitchButton('enable');
    };
    jqxSwitchButtonComponent.prototype.toggle = function () {
        this.host.jqxSwitchButton('toggle');
    };
    jqxSwitchButtonComponent.prototype.uncheck = function () {
        this.host.jqxSwitchButton('uncheck');
    };
    jqxSwitchButtonComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxSwitchButton("val", value);
        }
        else {
            return this.host.jqxSwitchButton("val");
        }
    };
    ;
    jqxSwitchButtonComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('checked', function (eventData) { _this.onChecked.emit(eventData); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('unchecked', function (eventData) { _this.onUnchecked.emit(eventData); });
    };
    return jqxSwitchButtonComponent;
}()); //jqxSwitchButtonComponent
__decorate([
    core_1.Input('checked'),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrChecked", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('orientation'),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrOrientation", void 0);
__decorate([
    core_1.Input('onLabel'),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrOnLabel", void 0);
__decorate([
    core_1.Input('offLabel'),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrOffLabel", void 0);
__decorate([
    core_1.Input('thumbSize'),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrThumbSize", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxSwitchButtonComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "onChecked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "onUnchecked", void 0);
jqxSwitchButtonComponent = __decorate([
    core_1.Component({
        selector: 'jqxSwitchButton',
        template: '<div><ng-content></ng-content></div>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxSwitchButtonComponent);
exports.jqxSwitchButtonComponent = jqxSwitchButtonComponent;
var _a;
