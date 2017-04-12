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
    useExisting: core_1.forwardRef(function () { return jqxSliderComponent; }),
    multi: true
};
var jqxSliderComponent = (function () {
    function jqxSliderComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['buttonsPosition', 'disabled', 'height', 'layout', 'mode', 'minorTicksFrequency', 'minorTickSize', 'max', 'min', 'rangeSlider', 'rtl', 'step', 'showTicks', 'showMinorTicks', 'showTickLabels', 'showButtons', 'showRange', 'template', 'theme', 'ticksPosition', 'ticksFrequency', 'tickSize', 'tickLabelFormatFunction', 'tooltip', 'tooltipHideDelay', 'tooltipPosition', 'tooltipFormatFunction', 'value', 'values', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxSliderComponent events
        this.onChange = new core_1.EventEmitter();
        this.onCreated = new core_1.EventEmitter();
        this.onSlide = new core_1.EventEmitter();
        this.onSlideStart = new core_1.EventEmitter();
        this.onSlideEnd = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxSliderComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSlider(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSlider(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSlider(this.properties[i])) {
                        this.host.jqxSlider(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxSliderComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxSliderComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxSliderComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSlider', options);
        this.__updateRect__();
    };
    jqxSliderComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxSliderComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxSliderComponent.prototype, "ngValue", {
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
    jqxSliderComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxSliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxSliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxSliderComponent.prototype.setOptions = function (options) {
        this.host.jqxSlider('setOptions', options);
    };
    // jqxSliderComponent properties
    jqxSliderComponent.prototype.buttonsPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('buttonsPosition', arg);
        }
        else {
            return this.host.jqxSlider('buttonsPosition');
        }
    };
    jqxSliderComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('disabled', arg);
        }
        else {
            return this.host.jqxSlider('disabled');
        }
    };
    jqxSliderComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('height', arg);
        }
        else {
            return this.host.jqxSlider('height');
        }
    };
    jqxSliderComponent.prototype.layout = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('layout', arg);
        }
        else {
            return this.host.jqxSlider('layout');
        }
    };
    jqxSliderComponent.prototype.mode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('mode', arg);
        }
        else {
            return this.host.jqxSlider('mode');
        }
    };
    jqxSliderComponent.prototype.minorTicksFrequency = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTicksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('minorTicksFrequency');
        }
    };
    jqxSliderComponent.prototype.minorTickSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTickSize', arg);
        }
        else {
            return this.host.jqxSlider('minorTickSize');
        }
    };
    jqxSliderComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('max', arg);
        }
        else {
            return this.host.jqxSlider('max');
        }
    };
    jqxSliderComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('min', arg);
        }
        else {
            return this.host.jqxSlider('min');
        }
    };
    jqxSliderComponent.prototype.rangeSlider = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rangeSlider', arg);
        }
        else {
            return this.host.jqxSlider('rangeSlider');
        }
    };
    jqxSliderComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rtl', arg);
        }
        else {
            return this.host.jqxSlider('rtl');
        }
    };
    jqxSliderComponent.prototype.step = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('step', arg);
        }
        else {
            return this.host.jqxSlider('step');
        }
    };
    jqxSliderComponent.prototype.showTicks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTicks', arg);
        }
        else {
            return this.host.jqxSlider('showTicks');
        }
    };
    jqxSliderComponent.prototype.showMinorTicks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showMinorTicks', arg);
        }
        else {
            return this.host.jqxSlider('showMinorTicks');
        }
    };
    jqxSliderComponent.prototype.showTickLabels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTickLabels', arg);
        }
        else {
            return this.host.jqxSlider('showTickLabels');
        }
    };
    jqxSliderComponent.prototype.showButtons = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showButtons', arg);
        }
        else {
            return this.host.jqxSlider('showButtons');
        }
    };
    jqxSliderComponent.prototype.showRange = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showRange', arg);
        }
        else {
            return this.host.jqxSlider('showRange');
        }
    };
    jqxSliderComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('template', arg);
        }
        else {
            return this.host.jqxSlider('template');
        }
    };
    jqxSliderComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('theme', arg);
        }
        else {
            return this.host.jqxSlider('theme');
        }
    };
    jqxSliderComponent.prototype.ticksPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksPosition', arg);
        }
        else {
            return this.host.jqxSlider('ticksPosition');
        }
    };
    jqxSliderComponent.prototype.ticksFrequency = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('ticksFrequency');
        }
    };
    jqxSliderComponent.prototype.tickSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickSize', arg);
        }
        else {
            return this.host.jqxSlider('tickSize');
        }
    };
    jqxSliderComponent.prototype.tickLabelFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickLabelFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tickLabelFormatFunction');
        }
    };
    jqxSliderComponent.prototype.tooltip = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltip', arg);
        }
        else {
            return this.host.jqxSlider('tooltip');
        }
    };
    jqxSliderComponent.prototype.tooltipHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipHideDelay', arg);
        }
        else {
            return this.host.jqxSlider('tooltipHideDelay');
        }
    };
    jqxSliderComponent.prototype.tooltipPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipPosition', arg);
        }
        else {
            return this.host.jqxSlider('tooltipPosition');
        }
    };
    jqxSliderComponent.prototype.tooltipFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tooltipFormatFunction');
        }
    };
    jqxSliderComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('value', arg);
        }
        else {
            return this.host.jqxSlider('value');
        }
    };
    jqxSliderComponent.prototype.values = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('values', arg);
        }
        else {
            return this.host.jqxSlider('values');
        }
    };
    jqxSliderComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('width', arg);
        }
        else {
            return this.host.jqxSlider('width');
        }
    };
    // jqxSliderComponent functions
    jqxSliderComponent.prototype.destroy = function () {
        this.host.jqxSlider('destroy');
    };
    jqxSliderComponent.prototype.decrementValue = function () {
        this.host.jqxSlider('decrementValue');
    };
    jqxSliderComponent.prototype.disable = function () {
        this.host.jqxSlider('disable');
    };
    jqxSliderComponent.prototype.enable = function () {
        this.host.jqxSlider('enable');
    };
    jqxSliderComponent.prototype.focus = function () {
        this.host.jqxSlider('focus');
    };
    jqxSliderComponent.prototype.getValue = function () {
        return this.host.jqxSlider('getValue');
    };
    jqxSliderComponent.prototype.incrementValue = function () {
        this.host.jqxSlider('incrementValue');
    };
    jqxSliderComponent.prototype.setValue = function (index) {
        this.host.jqxSlider('setValue', index);
    };
    jqxSliderComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxSlider("val", value);
        }
        else {
            return this.host.jqxSlider("val");
        }
    };
    ;
    jqxSliderComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('created', function (eventData) { _this.onCreated.emit(eventData); });
        this.host.on('slide', function (eventData) { _this.onSlide.emit(eventData); });
        this.host.on('slideStart', function (eventData) { _this.onSlideStart.emit(eventData); });
        this.host.on('slideEnd', function (eventData) { _this.onSlideEnd.emit(eventData); });
    };
    return jqxSliderComponent;
}()); //jqxSliderComponent
__decorate([
    core_1.Input('buttonsPosition'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrButtonsPosition", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('layout'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrLayout", void 0);
__decorate([
    core_1.Input('mode'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrMode", void 0);
__decorate([
    core_1.Input('minorTicksFrequency'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrMinorTicksFrequency", void 0);
__decorate([
    core_1.Input('minorTickSize'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrMinorTickSize", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrMax", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrMin", void 0);
__decorate([
    core_1.Input('rangeSlider'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrRangeSlider", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('step'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrStep", void 0);
__decorate([
    core_1.Input('showTicks'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrShowTicks", void 0);
__decorate([
    core_1.Input('showMinorTicks'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrShowMinorTicks", void 0);
__decorate([
    core_1.Input('showTickLabels'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrShowTickLabels", void 0);
__decorate([
    core_1.Input('showButtons'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrShowButtons", void 0);
__decorate([
    core_1.Input('showRange'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrShowRange", void 0);
__decorate([
    core_1.Input('template'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTemplate", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('ticksPosition'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTicksPosition", void 0);
__decorate([
    core_1.Input('ticksFrequency'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTicksFrequency", void 0);
__decorate([
    core_1.Input('tickSize'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTickSize", void 0);
__decorate([
    core_1.Input('tickLabelFormatFunction'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTickLabelFormatFunction", void 0);
__decorate([
    core_1.Input('tooltip'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTooltip", void 0);
__decorate([
    core_1.Input('tooltipHideDelay'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTooltipHideDelay", void 0);
__decorate([
    core_1.Input('tooltipPosition'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTooltipPosition", void 0);
__decorate([
    core_1.Input('tooltipFormatFunction'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrTooltipFormatFunction", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('values'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrValues", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "onCreated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "onSlide", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "onSlideStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxSliderComponent.prototype, "onSlideEnd", void 0);
jqxSliderComponent = __decorate([
    core_1.Component({
        selector: 'jqxSlider',
        template: '<div><ng-content></ng-content></div>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxSliderComponent);
exports.jqxSliderComponent = jqxSliderComponent;
var _a;
