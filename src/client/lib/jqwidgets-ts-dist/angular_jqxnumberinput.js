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
    useExisting: core_1.forwardRef(function () { return jqxNumberInputComponent; }),
    multi: true
};
var jqxNumberInputComponent = (function () {
    function jqxNumberInputComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['allowNull', 'decimal', 'disabled', 'decimalDigits', 'decimalSeparator', 'digits', 'groupSeparator', 'groupSize', 'height', 'inputMode', 'min', 'max', 'negativeSymbol', 'placeHolder', 'promptChar', 'rtl', 'readOnly', 'spinMode', 'spinButtons', 'spinButtonsWidth', 'spinButtonsStep', 'symbol', 'symbolPosition', 'textAlign', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxNumberInputComponent events
        this.onChange = new core_1.EventEmitter();
        this.onTextchanged = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxNumberInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxNumberInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxNumberInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxNumberInputComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
        this.__updateRect__();
    };
    jqxNumberInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxNumberInputComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxNumberInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxNumberInput('val', value);
        }
    };
    jqxNumberInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxNumberInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxNumberInputComponent.prototype.setOptions = function (options) {
        this.host.jqxNumberInput('setOptions', options);
    };
    // jqxNumberInputComponent properties
    jqxNumberInputComponent.prototype.allowNull = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('allowNull', arg);
        }
        else {
            return this.host.jqxNumberInput('allowNull');
        }
    };
    jqxNumberInputComponent.prototype.decimal = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimal', arg);
        }
        else {
            return this.host.jqxNumberInput('decimal');
        }
    };
    jqxNumberInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('disabled', arg);
        }
        else {
            return this.host.jqxNumberInput('disabled');
        }
    };
    jqxNumberInputComponent.prototype.decimalDigits = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalDigits', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalDigits');
        }
    };
    jqxNumberInputComponent.prototype.decimalSeparator = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalSeparator');
        }
    };
    jqxNumberInputComponent.prototype.digits = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('digits', arg);
        }
        else {
            return this.host.jqxNumberInput('digits');
        }
    };
    jqxNumberInputComponent.prototype.groupSeparator = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSeparator');
        }
    };
    jqxNumberInputComponent.prototype.groupSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSize', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSize');
        }
    };
    jqxNumberInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('height', arg);
        }
        else {
            return this.host.jqxNumberInput('height');
        }
    };
    jqxNumberInputComponent.prototype.inputMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('inputMode', arg);
        }
        else {
            return this.host.jqxNumberInput('inputMode');
        }
    };
    jqxNumberInputComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('min', arg);
        }
        else {
            return this.host.jqxNumberInput('min');
        }
    };
    jqxNumberInputComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('max', arg);
        }
        else {
            return this.host.jqxNumberInput('max');
        }
    };
    jqxNumberInputComponent.prototype.negativeSymbol = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('negativeSymbol', arg);
        }
        else {
            return this.host.jqxNumberInput('negativeSymbol');
        }
    };
    jqxNumberInputComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('placeHolder', arg);
        }
        else {
            return this.host.jqxNumberInput('placeHolder');
        }
    };
    jqxNumberInputComponent.prototype.promptChar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('promptChar', arg);
        }
        else {
            return this.host.jqxNumberInput('promptChar');
        }
    };
    jqxNumberInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('rtl', arg);
        }
        else {
            return this.host.jqxNumberInput('rtl');
        }
    };
    jqxNumberInputComponent.prototype.readOnly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('readOnly', arg);
        }
        else {
            return this.host.jqxNumberInput('readOnly');
        }
    };
    jqxNumberInputComponent.prototype.spinMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinMode', arg);
        }
        else {
            return this.host.jqxNumberInput('spinMode');
        }
    };
    jqxNumberInputComponent.prototype.spinButtons = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtons', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtons');
        }
    };
    jqxNumberInputComponent.prototype.spinButtonsWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsWidth', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsWidth');
        }
    };
    jqxNumberInputComponent.prototype.spinButtonsStep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsStep');
        }
    };
    jqxNumberInputComponent.prototype.symbol = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbol', arg);
        }
        else {
            return this.host.jqxNumberInput('symbol');
        }
    };
    jqxNumberInputComponent.prototype.symbolPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbolPosition', arg);
        }
        else {
            return this.host.jqxNumberInput('symbolPosition');
        }
    };
    jqxNumberInputComponent.prototype.textAlign = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('textAlign', arg);
        }
        else {
            return this.host.jqxNumberInput('textAlign');
        }
    };
    jqxNumberInputComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('template', arg);
        }
        else {
            return this.host.jqxNumberInput('template');
        }
    };
    jqxNumberInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('theme', arg);
        }
        else {
            return this.host.jqxNumberInput('theme');
        }
    };
    jqxNumberInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('value', arg);
        }
        else {
            return this.host.jqxNumberInput('value');
        }
    };
    jqxNumberInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('width', arg);
        }
        else {
            return this.host.jqxNumberInput('width');
        }
    };
    // jqxNumberInputComponent functions
    jqxNumberInputComponent.prototype.clear = function () {
        this.host.jqxNumberInput('clear');
    };
    jqxNumberInputComponent.prototype.destroy = function () {
        this.host.jqxNumberInput('destroy');
    };
    jqxNumberInputComponent.prototype.focus = function () {
        this.host.jqxNumberInput('focus');
    };
    jqxNumberInputComponent.prototype.getDecimal = function () {
        return this.host.jqxNumberInput('getDecimal');
    };
    jqxNumberInputComponent.prototype.setDecimal = function (index) {
        this.host.jqxNumberInput('setDecimal', index);
    };
    jqxNumberInputComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxNumberInput("val", value);
        }
        else {
            return this.host.jqxNumberInput("val");
        }
    };
    ;
    jqxNumberInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.text); });
        this.host.on('textchanged', function (eventData) { _this.onTextchanged.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.text); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.text); });
    };
    return jqxNumberInputComponent;
}()); //jqxNumberInputComponent
__decorate([
    core_1.Input('allowNull'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrAllowNull", void 0);
__decorate([
    core_1.Input('decimal'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrDecimal", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('decimalDigits'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrDecimalDigits", void 0);
__decorate([
    core_1.Input('decimalSeparator'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrDecimalSeparator", void 0);
__decorate([
    core_1.Input('digits'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrDigits", void 0);
__decorate([
    core_1.Input('groupSeparator'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrGroupSeparator", void 0);
__decorate([
    core_1.Input('groupSize'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrGroupSize", void 0);
__decorate([
    core_1.Input('inputMode'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrInputMode", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrMin", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrMax", void 0);
__decorate([
    core_1.Input('negativeSymbol'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrNegativeSymbol", void 0);
__decorate([
    core_1.Input('placeHolder'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    core_1.Input('promptChar'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrPromptChar", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('readOnly'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrReadOnly", void 0);
__decorate([
    core_1.Input('spinMode'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrSpinMode", void 0);
__decorate([
    core_1.Input('spinButtons'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrSpinButtons", void 0);
__decorate([
    core_1.Input('spinButtonsWidth'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrSpinButtonsWidth", void 0);
__decorate([
    core_1.Input('spinButtonsStep'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrSpinButtonsStep", void 0);
__decorate([
    core_1.Input('symbol'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrSymbol", void 0);
__decorate([
    core_1.Input('symbolPosition'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrSymbolPosition", void 0);
__decorate([
    core_1.Input('textAlign'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrTextAlign", void 0);
__decorate([
    core_1.Input('template'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrTemplate", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxNumberInputComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "onTextchanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "onValueChanged", void 0);
jqxNumberInputComponent = __decorate([
    core_1.Component({
        selector: 'jqxNumberInput',
        template: '<input>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxNumberInputComponent);
exports.jqxNumberInputComponent = jqxNumberInputComponent;
var _a;
