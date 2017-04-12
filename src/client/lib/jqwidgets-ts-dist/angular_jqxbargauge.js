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
var jqxBarGaugeComponent = (function () {
    function jqxBarGaugeComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['animationDuration', 'backgroundColor', 'barSpacing', 'baseValue', 'colorScheme', 'customColorScheme', 'disabled', 'endAngle', 'formatFunction', 'height', 'labels', 'max', 'min', 'relativeInnerRadius', 'rendered', 'startAngle', 'title', 'tooltip', 'useGradient', 'values', 'width'];
        // jqxBarGaugeComponent events
        this.onDrawEnd = new core_1.EventEmitter();
        this.onDrawStart = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onTooltipClose = new core_1.EventEmitter();
        this.onTooltipOpen = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxBarGaugeComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxBarGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxBarGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxBarGauge(this.properties[i])) {
                        this.host.jqxBarGauge(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxBarGaugeComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxBarGaugeComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxBarGaugeComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBarGauge', options);
        this.__updateRect__();
    };
    jqxBarGaugeComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxBarGaugeComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxBarGaugeComponent.prototype.setOptions = function (options) {
        this.host.jqxBarGauge('setOptions', options);
    };
    // jqxBarGaugeComponent properties
    jqxBarGaugeComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxBarGauge('animationDuration');
        }
    };
    jqxBarGaugeComponent.prototype.backgroundColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('backgroundColor', arg);
        }
        else {
            return this.host.jqxBarGauge('backgroundColor');
        }
    };
    jqxBarGaugeComponent.prototype.barSpacing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('barSpacing', arg);
        }
        else {
            return this.host.jqxBarGauge('barSpacing');
        }
    };
    jqxBarGaugeComponent.prototype.baseValue = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('baseValue', arg);
        }
        else {
            return this.host.jqxBarGauge('baseValue');
        }
    };
    jqxBarGaugeComponent.prototype.colorScheme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxBarGauge('colorScheme');
        }
    };
    jqxBarGaugeComponent.prototype.customColorScheme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('customColorScheme', arg);
        }
        else {
            return this.host.jqxBarGauge('customColorScheme');
        }
    };
    jqxBarGaugeComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('disabled', arg);
        }
        else {
            return this.host.jqxBarGauge('disabled');
        }
    };
    jqxBarGaugeComponent.prototype.endAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('endAngle', arg);
        }
        else {
            return this.host.jqxBarGauge('endAngle');
        }
    };
    jqxBarGaugeComponent.prototype.formatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('formatFunction', arg);
        }
        else {
            return this.host.jqxBarGauge('formatFunction');
        }
    };
    jqxBarGaugeComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('height', arg);
        }
        else {
            return this.host.jqxBarGauge('height');
        }
    };
    jqxBarGaugeComponent.prototype.labels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('labels', arg);
        }
        else {
            return this.host.jqxBarGauge('labels');
        }
    };
    jqxBarGaugeComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('max', arg);
        }
        else {
            return this.host.jqxBarGauge('max');
        }
    };
    jqxBarGaugeComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('min', arg);
        }
        else {
            return this.host.jqxBarGauge('min');
        }
    };
    jqxBarGaugeComponent.prototype.relativeInnerRadius = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('relativeInnerRadius', arg);
        }
        else {
            return this.host.jqxBarGauge('relativeInnerRadius');
        }
    };
    jqxBarGaugeComponent.prototype.rendered = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('rendered', arg);
        }
        else {
            return this.host.jqxBarGauge('rendered');
        }
    };
    jqxBarGaugeComponent.prototype.startAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('startAngle', arg);
        }
        else {
            return this.host.jqxBarGauge('startAngle');
        }
    };
    jqxBarGaugeComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('title', arg);
        }
        else {
            return this.host.jqxBarGauge('title');
        }
    };
    jqxBarGaugeComponent.prototype.tooltip = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('tooltip', arg);
        }
        else {
            return this.host.jqxBarGauge('tooltip');
        }
    };
    jqxBarGaugeComponent.prototype.useGradient = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('useGradient', arg);
        }
        else {
            return this.host.jqxBarGauge('useGradient');
        }
    };
    jqxBarGaugeComponent.prototype.values = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('values', arg);
        }
        else {
            return this.host.jqxBarGauge('values');
        }
    };
    jqxBarGaugeComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('width', arg);
        }
        else {
            return this.host.jqxBarGauge('width');
        }
    };
    // jqxBarGaugeComponent functions
    jqxBarGaugeComponent.prototype.refresh = function () {
        this.host.jqxBarGauge('refresh');
    };
    jqxBarGaugeComponent.prototype.render = function () {
        this.host.jqxBarGauge('render');
    };
    jqxBarGaugeComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxBarGauge("val", value);
        }
        else {
            return this.host.jqxBarGauge("val");
        }
    };
    ;
    jqxBarGaugeComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('drawEnd', function (eventData) { _this.onDrawEnd.emit(eventData); });
        this.host.on('drawStart', function (eventData) { _this.onDrawStart.emit(eventData); });
        this.host.on('initialized', function (eventData) { _this.onInitialized.emit(eventData); });
        this.host.on('tooltipClose', function (eventData) { _this.onTooltipClose.emit(eventData); });
        this.host.on('tooltipOpen', function (eventData) { _this.onTooltipOpen.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
    };
    return jqxBarGaugeComponent;
}()); //jqxBarGaugeComponent
__decorate([
    core_1.Input('animationDuration'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    core_1.Input('backgroundColor'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrBackgroundColor", void 0);
__decorate([
    core_1.Input('barSpacing'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrBarSpacing", void 0);
__decorate([
    core_1.Input('baseValue'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrBaseValue", void 0);
__decorate([
    core_1.Input('colorScheme'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrColorScheme", void 0);
__decorate([
    core_1.Input('customColorScheme'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrCustomColorScheme", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('endAngle'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrEndAngle", void 0);
__decorate([
    core_1.Input('formatFunction'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrFormatFunction", void 0);
__decorate([
    core_1.Input('labels'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrLabels", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrMax", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrMin", void 0);
__decorate([
    core_1.Input('relativeInnerRadius'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrRelativeInnerRadius", void 0);
__decorate([
    core_1.Input('rendered'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrRendered", void 0);
__decorate([
    core_1.Input('startAngle'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrStartAngle", void 0);
__decorate([
    core_1.Input('title'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrTitle", void 0);
__decorate([
    core_1.Input('tooltip'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrTooltip", void 0);
__decorate([
    core_1.Input('useGradient'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrUseGradient", void 0);
__decorate([
    core_1.Input('values'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrValues", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxBarGaugeComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "onDrawEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "onDrawStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "onInitialized", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "onTooltipClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "onTooltipOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxBarGaugeComponent.prototype, "onValueChanged", void 0);
jqxBarGaugeComponent = __decorate([
    core_1.Component({
        selector: 'jqxBarGauge',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxBarGaugeComponent);
exports.jqxBarGaugeComponent = jqxBarGaugeComponent;
var _a;
