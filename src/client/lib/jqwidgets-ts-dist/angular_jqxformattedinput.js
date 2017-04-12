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
    useExisting: core_1.forwardRef(function () { return jqxFormattedInputComponent; }),
    multi: true
};
var jqxFormattedInputComponent = (function () {
    function jqxFormattedInputComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['disabled', 'decimalNotation', 'dropDown', 'dropDownWidth', 'height', 'min', 'max', 'placeHolder', 'popupZIndex', 'roundedCorners', 'rtl', 'radix', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'upperCase', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxFormattedInputComponent events
        this.onChange = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
        this.onRadixChange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxFormattedInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxFormattedInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxFormattedInput(this.properties[i])) {
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxFormattedInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxFormattedInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxFormattedInputComponent.prototype.createComponent = function (options) {
        var _this = this;
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxFormattedInput', options);
        this.__updateRect__();
        setTimeout(function () {
            _this.host.jqxFormattedInput('val', parseFloat(options.value));
        }, 1);
    };
    jqxFormattedInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxFormattedInputComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxFormattedInputComponent.prototype, "ngValue", {
        get: function () {
            if (this.widgetObject)
                return this.host.val();
            return '';
        },
        set: function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    jqxFormattedInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxFormattedInput('val', value);
        }
    };
    jqxFormattedInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxFormattedInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxFormattedInputComponent.prototype.setOptions = function (options) {
        this.host.jqxFormattedInput('setOptions', options);
    };
    // jqxFormattedInputComponent properties
    jqxFormattedInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('disabled', arg);
        }
        else {
            return this.host.jqxFormattedInput('disabled');
        }
    };
    jqxFormattedInputComponent.prototype.decimalNotation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('decimalNotation', arg);
        }
        else {
            return this.host.jqxFormattedInput('decimalNotation');
        }
    };
    jqxFormattedInputComponent.prototype.dropDown = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDown', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDown');
        }
    };
    jqxFormattedInputComponent.prototype.dropDownWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDownWidth', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDownWidth');
        }
    };
    jqxFormattedInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('height', arg);
        }
        else {
            return this.host.jqxFormattedInput('height');
        }
    };
    jqxFormattedInputComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('min', arg);
        }
        else {
            return this.host.jqxFormattedInput('min');
        }
    };
    jqxFormattedInputComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('max', arg);
        }
        else {
            return this.host.jqxFormattedInput('max');
        }
    };
    jqxFormattedInputComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('placeHolder', arg);
        }
        else {
            return this.host.jqxFormattedInput('placeHolder');
        }
    };
    jqxFormattedInputComponent.prototype.popupZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxFormattedInput('popupZIndex');
        }
    };
    jqxFormattedInputComponent.prototype.roundedCorners = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('roundedCorners', arg);
        }
        else {
            return this.host.jqxFormattedInput('roundedCorners');
        }
    };
    jqxFormattedInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('rtl', arg);
        }
        else {
            return this.host.jqxFormattedInput('rtl');
        }
    };
    jqxFormattedInputComponent.prototype.radix = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('radix', arg);
        }
        else {
            return this.host.jqxFormattedInput('radix');
        }
    };
    jqxFormattedInputComponent.prototype.spinButtons = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtons', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtons');
        }
    };
    jqxFormattedInputComponent.prototype.spinButtonsStep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtonsStep');
        }
    };
    jqxFormattedInputComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('template', arg);
        }
        else {
            return this.host.jqxFormattedInput('template');
        }
    };
    jqxFormattedInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('theme', arg);
        }
        else {
            return this.host.jqxFormattedInput('theme');
        }
    };
    jqxFormattedInputComponent.prototype.upperCase = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('upperCase', arg);
        }
        else {
            return this.host.jqxFormattedInput('upperCase');
        }
    };
    jqxFormattedInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('value', arg);
        }
        else {
            return this.host.jqxFormattedInput('value');
        }
    };
    jqxFormattedInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('width', arg);
        }
        else {
            return this.host.jqxFormattedInput('width');
        }
    };
    // jqxFormattedInputComponent functions
    jqxFormattedInputComponent.prototype.close = function () {
        this.host.jqxFormattedInput('close');
    };
    jqxFormattedInputComponent.prototype.destroy = function () {
        this.host.jqxFormattedInput('destroy');
    };
    jqxFormattedInputComponent.prototype.focus = function () {
        this.host.jqxFormattedInput('focus');
    };
    jqxFormattedInputComponent.prototype.open = function () {
        this.host.jqxFormattedInput('open');
    };
    jqxFormattedInputComponent.prototype.render = function () {
        this.host.jqxFormattedInput('render');
    };
    jqxFormattedInputComponent.prototype.refresh = function () {
        this.host.jqxFormattedInput('refresh');
    };
    jqxFormattedInputComponent.prototype.selectAll = function () {
        this.host.jqxFormattedInput('selectAll');
    };
    jqxFormattedInputComponent.prototype.selectFirst = function () {
        this.host.jqxFormattedInput('selectFirst');
    };
    jqxFormattedInputComponent.prototype.selectLast = function () {
        this.host.jqxFormattedInput('selectLast');
    };
    jqxFormattedInputComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxFormattedInput("val", value);
        }
        else {
            return this.host.jqxFormattedInput("val");
        }
    };
    ;
    jqxFormattedInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('radixChange', function (eventData) { _this.onRadixChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
    };
    return jqxFormattedInputComponent;
}()); //jqxFormattedInputComponent
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('decimalNotation'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrDecimalNotation", void 0);
__decorate([
    core_1.Input('dropDown'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrDropDown", void 0);
__decorate([
    core_1.Input('dropDownWidth'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrDropDownWidth", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrMin", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrMax", void 0);
__decorate([
    core_1.Input('placeHolder'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    core_1.Input('popupZIndex'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrPopupZIndex", void 0);
__decorate([
    core_1.Input('roundedCorners'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrRoundedCorners", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('radix'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrRadix", void 0);
__decorate([
    core_1.Input('spinButtons'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrSpinButtons", void 0);
__decorate([
    core_1.Input('spinButtonsStep'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrSpinButtonsStep", void 0);
__decorate([
    core_1.Input('template'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrTemplate", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('upperCase'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrUpperCase", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxFormattedInputComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "onOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "onRadixChange", void 0);
jqxFormattedInputComponent = __decorate([
    core_1.Component({
        selector: 'jqxFormattedInput',
        template: '<div><input type="text" [(ngModel)]="ngValue"><div></div><div></div></div>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxFormattedInputComponent);
exports.jqxFormattedInputComponent = jqxFormattedInputComponent;
var _a;
