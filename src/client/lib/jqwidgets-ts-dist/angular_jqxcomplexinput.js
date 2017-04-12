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
    useExisting: core_1.forwardRef(function () { return jqxComplexInputComponent; }),
    multi: true
};
var jqxComplexInputComponent = (function () {
    function jqxComplexInputComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['decimalNotation', 'disabled', 'height', 'placeHolder', 'roundedCorners', 'rtl', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxComplexInputComponent events
        this.onChange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxComplexInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxComplexInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxComplexInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxComplexInput(this.properties[i])) {
                        this.host.jqxComplexInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxComplexInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxComplexInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxComplexInputComponent.prototype.createComponent = function (options) {
        var _this = this;
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComplexInput', options);
        this.__updateRect__();
        setTimeout(function () {
            var valueWithWS = ' ' + options.value;
            _this.host.jqxComplexInput({ value: valueWithWS });
        }, 1);
    };
    jqxComplexInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxComplexInputComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxComplexInputComponent.prototype, "ngValue", {
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
    jqxComplexInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
            this.host.jqxComplexInput('val', value);
        }
    };
    jqxComplexInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxComplexInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxComplexInputComponent.prototype.setOptions = function (options) {
        this.host.jqxComplexInput('setOptions', options);
    };
    // jqxComplexInputComponent properties
    jqxComplexInputComponent.prototype.decimalNotation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('decimalNotation', arg);
        }
        else {
            return this.host.jqxComplexInput('decimalNotation');
        }
    };
    jqxComplexInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('disabled', arg);
        }
        else {
            return this.host.jqxComplexInput('disabled');
        }
    };
    jqxComplexInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('height', arg);
        }
        else {
            return this.host.jqxComplexInput('height');
        }
    };
    jqxComplexInputComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('placeHolder', arg);
        }
        else {
            return this.host.jqxComplexInput('placeHolder');
        }
    };
    jqxComplexInputComponent.prototype.roundedCorners = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('roundedCorners', arg);
        }
        else {
            return this.host.jqxComplexInput('roundedCorners');
        }
    };
    jqxComplexInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('rtl', arg);
        }
        else {
            return this.host.jqxComplexInput('rtl');
        }
    };
    jqxComplexInputComponent.prototype.spinButtons = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('spinButtons', arg);
        }
        else {
            return this.host.jqxComplexInput('spinButtons');
        }
    };
    jqxComplexInputComponent.prototype.spinButtonsStep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxComplexInput('spinButtonsStep');
        }
    };
    jqxComplexInputComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('template', arg);
        }
        else {
            return this.host.jqxComplexInput('template');
        }
    };
    jqxComplexInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('theme', arg);
        }
        else {
            return this.host.jqxComplexInput('theme');
        }
    };
    jqxComplexInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('value', arg);
        }
        else {
            return this.host.jqxComplexInput('value');
        }
    };
    jqxComplexInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('width', arg);
        }
        else {
            return this.host.jqxComplexInput('width');
        }
    };
    // jqxComplexInputComponent functions
    jqxComplexInputComponent.prototype.destroy = function () {
        this.host.jqxComplexInput('destroy');
    };
    jqxComplexInputComponent.prototype.getReal = function (complexNumber) {
        return this.host.jqxComplexInput('getReal', complexNumber);
    };
    jqxComplexInputComponent.prototype.getImaginary = function (complexNumber) {
        return this.host.jqxComplexInput('getImaginary', complexNumber);
    };
    jqxComplexInputComponent.prototype.getDecimalNotation = function (part, type) {
        return this.host.jqxComplexInput('getDecimalNotation', part, type);
    };
    jqxComplexInputComponent.prototype.render = function () {
        this.host.jqxComplexInput('render');
    };
    jqxComplexInputComponent.prototype.refresh = function () {
        this.host.jqxComplexInput('refresh');
    };
    jqxComplexInputComponent.prototype.val = function () {
        if (value !== undefined) {
            this.host.jqxComplexInput("val");
        }
        else {
            return this.host.jqxComplexInput("val");
        }
    };
    ;
    jqxComplexInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
    };
    return jqxComplexInputComponent;
}()); //jqxComplexInputComponent
__decorate([
    core_1.Input('decimalNotation'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrDecimalNotation", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('placeHolder'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    core_1.Input('roundedCorners'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrRoundedCorners", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('spinButtons'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrSpinButtons", void 0);
__decorate([
    core_1.Input('spinButtonsStep'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrSpinButtonsStep", void 0);
__decorate([
    core_1.Input('template'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrTemplate", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxComplexInputComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "onChange", void 0);
jqxComplexInputComponent = __decorate([
    core_1.Component({
        selector: 'jqxComplexInput',
        template: '<div style="padding-right: 2px;"><input [(ngModel)]="ngValue"><div></div></div>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxComplexInputComponent);
exports.jqxComplexInputComponent = jqxComplexInputComponent;
var _a;
