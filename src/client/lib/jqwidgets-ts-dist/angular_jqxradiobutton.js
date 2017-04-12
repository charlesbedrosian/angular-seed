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
    useExisting: core_1.forwardRef(function () { return jqxRadioButtonComponent; }),
    multi: true
};
var jqxRadioButtonComponent = (function () {
    function jqxRadioButtonComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'hasThreeStates', 'height', 'rtl', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxRadioButtonComponent events
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
    jqxRadioButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRadioButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRadioButton(this.properties[i])) {
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxRadioButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxRadioButtonComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxRadioButtonComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRadioButton', options);
        this.__updateRect__();
        this.valueAttr = this.host[0].parentElement.getAttribute('value');
        if (options.checked === true)
            this.onChangeCallback(this.valueAttr);
    };
    jqxRadioButtonComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxRadioButtonComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxRadioButtonComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
        }
    };
    jqxRadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxRadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxRadioButtonComponent.prototype.setOptions = function (options) {
        this.host.jqxRadioButton('setOptions', options);
    };
    // jqxRadioButtonComponent properties
    jqxRadioButtonComponent.prototype.animationShowDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationShowDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationShowDelay');
        }
    };
    jqxRadioButtonComponent.prototype.animationHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationHideDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationHideDelay');
        }
    };
    jqxRadioButtonComponent.prototype.boxSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('boxSize', arg);
        }
        else {
            return this.host.jqxRadioButton('boxSize');
        }
    };
    jqxRadioButtonComponent.prototype.checked = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('checked', arg);
        }
        else {
            return this.host.jqxRadioButton('checked');
        }
    };
    jqxRadioButtonComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('disabled', arg);
        }
        else {
            return this.host.jqxRadioButton('disabled');
        }
    };
    jqxRadioButtonComponent.prototype.enableContainerClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('enableContainerClick', arg);
        }
        else {
            return this.host.jqxRadioButton('enableContainerClick');
        }
    };
    jqxRadioButtonComponent.prototype.groupName = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('groupName', arg);
        }
        else {
            return this.host.jqxRadioButton('groupName');
        }
    };
    jqxRadioButtonComponent.prototype.hasThreeStates = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('hasThreeStates', arg);
        }
        else {
            return this.host.jqxRadioButton('hasThreeStates');
        }
    };
    jqxRadioButtonComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('height', arg);
        }
        else {
            return this.host.jqxRadioButton('height');
        }
    };
    jqxRadioButtonComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('rtl', arg);
        }
        else {
            return this.host.jqxRadioButton('rtl');
        }
    };
    jqxRadioButtonComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('theme', arg);
        }
        else {
            return this.host.jqxRadioButton('theme');
        }
    };
    jqxRadioButtonComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('width', arg);
        }
        else {
            return this.host.jqxRadioButton('width');
        }
    };
    // jqxRadioButtonComponent functions
    jqxRadioButtonComponent.prototype.check = function () {
        this.host.jqxRadioButton('check');
    };
    jqxRadioButtonComponent.prototype.disable = function () {
        this.host.jqxRadioButton('disable');
    };
    jqxRadioButtonComponent.prototype.destroy = function () {
        this.host.jqxRadioButton('destroy');
    };
    jqxRadioButtonComponent.prototype.enable = function () {
        this.host.jqxRadioButton('enable');
    };
    jqxRadioButtonComponent.prototype.focus = function () {
        this.host.jqxRadioButton('focus');
    };
    jqxRadioButtonComponent.prototype.render = function () {
        this.host.jqxRadioButton('render');
    };
    jqxRadioButtonComponent.prototype.uncheck = function () {
        this.host.jqxRadioButton('uncheck');
    };
    jqxRadioButtonComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxRadioButton("val", value);
        }
        else {
            return this.host.jqxRadioButton("val");
        }
    };
    ;
    jqxRadioButtonComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('checked', function (eventData) { _this.onChecked.emit(eventData); _this.onChangeCallback(_this.valueAttr); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        this.host.on('unchecked', function (eventData) { _this.onUnchecked.emit(eventData); });
    };
    return jqxRadioButtonComponent;
}()); //jqxRadioButtonComponent
__decorate([
    core_1.Input('animationShowDelay'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrAnimationShowDelay", void 0);
__decorate([
    core_1.Input('animationHideDelay'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrAnimationHideDelay", void 0);
__decorate([
    core_1.Input('boxSize'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrBoxSize", void 0);
__decorate([
    core_1.Input('checked'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrChecked", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('enableContainerClick'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrEnableContainerClick", void 0);
__decorate([
    core_1.Input('groupName'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrGroupName", void 0);
__decorate([
    core_1.Input('hasThreeStates'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrHasThreeStates", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxRadioButtonComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "onChecked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "onUnchecked", void 0);
jqxRadioButtonComponent = __decorate([
    core_1.Component({
        selector: 'jqxRadioButton',
        template: '<div><ng-content></ng-content></div>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxRadioButtonComponent);
exports.jqxRadioButtonComponent = jqxRadioButtonComponent;
var _a;
