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
    useExisting: core_1.forwardRef(function () { return jqxMaskedInputComponent; }),
    multi: true
};
var jqxMaskedInputComponent = (function () {
    function jqxMaskedInputComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'mask', 'promptChar', 'readOnly', 'rtl', 'theme', 'textAlign', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxMaskedInputComponent events
        this.onChange = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxMaskedInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMaskedInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMaskedInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMaskedInput(this.properties[i])) {
                        this.host.jqxMaskedInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxMaskedInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxMaskedInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxMaskedInputComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMaskedInput', options);
        this.__updateRect__();
    };
    jqxMaskedInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxMaskedInputComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxMaskedInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxMaskedInput('val', value);
        }
    };
    jqxMaskedInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxMaskedInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxMaskedInputComponent.prototype.setOptions = function (options) {
        this.host.jqxMaskedInput('setOptions', options);
    };
    // jqxMaskedInputComponent properties
    jqxMaskedInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('disabled', arg);
        }
        else {
            return this.host.jqxMaskedInput('disabled');
        }
    };
    jqxMaskedInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('height', arg);
        }
        else {
            return this.host.jqxMaskedInput('height');
        }
    };
    jqxMaskedInputComponent.prototype.mask = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('mask', arg);
        }
        else {
            return this.host.jqxMaskedInput('mask');
        }
    };
    jqxMaskedInputComponent.prototype.promptChar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('promptChar', arg);
        }
        else {
            return this.host.jqxMaskedInput('promptChar');
        }
    };
    jqxMaskedInputComponent.prototype.readOnly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('readOnly', arg);
        }
        else {
            return this.host.jqxMaskedInput('readOnly');
        }
    };
    jqxMaskedInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('rtl', arg);
        }
        else {
            return this.host.jqxMaskedInput('rtl');
        }
    };
    jqxMaskedInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('theme', arg);
        }
        else {
            return this.host.jqxMaskedInput('theme');
        }
    };
    jqxMaskedInputComponent.prototype.textAlign = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('textAlign', arg);
        }
        else {
            return this.host.jqxMaskedInput('textAlign');
        }
    };
    jqxMaskedInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('value', arg);
        }
        else {
            return this.host.jqxMaskedInput('value');
        }
    };
    jqxMaskedInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('width', arg);
        }
        else {
            return this.host.jqxMaskedInput('width');
        }
    };
    // jqxMaskedInputComponent functions
    jqxMaskedInputComponent.prototype.clear = function () {
        this.host.jqxMaskedInput('clear');
    };
    jqxMaskedInputComponent.prototype.destroy = function () {
        this.host.jqxMaskedInput('destroy');
    };
    jqxMaskedInputComponent.prototype.focus = function () {
        this.host.jqxMaskedInput('focus');
    };
    jqxMaskedInputComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxMaskedInput("val", value);
        }
        else {
            return this.host.jqxMaskedInput("val");
        }
    };
    ;
    jqxMaskedInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.text); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.text); });
    };
    return jqxMaskedInputComponent;
}()); //jqxMaskedInputComponent
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('mask'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrMask", void 0);
__decorate([
    core_1.Input('promptChar'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrPromptChar", void 0);
__decorate([
    core_1.Input('readOnly'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrReadOnly", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('textAlign'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrTextAlign", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxMaskedInputComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "onValueChanged", void 0);
jqxMaskedInputComponent = __decorate([
    core_1.Component({
        selector: 'jqxMaskedInput',
        template: '<input>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxMaskedInputComponent);
exports.jqxMaskedInputComponent = jqxMaskedInputComponent;
var _a;
