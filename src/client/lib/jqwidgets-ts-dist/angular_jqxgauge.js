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
var jqxGaugeComponent = (function () {
    function jqxGaugeComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['animationDuration', 'border', 'caption', 'cap', 'colorScheme', 'disabled', 'easing', 'endAngle', 'height', 'int64', 'labels', 'min', 'max', 'pointer', 'radius', 'ranges', 'startAngle', 'showRanges', 'style', 'ticksMajor', 'ticksMinor', 'ticksDistance', 'value', 'width'];
        // jqxGaugeComponent events
        this.onValueChanging = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxGaugeComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxGauge(this.properties[i])) {
                        this.host.jqxGauge(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxGaugeComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxGaugeComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxGaugeComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGauge', options);
        this.__updateRect__();
    };
    jqxGaugeComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxGaugeComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxGaugeComponent.prototype.setOptions = function (options) {
        this.host.jqxGauge('setOptions', options);
    };
    // jqxGaugeComponent properties
    jqxGaugeComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxGauge('animationDuration');
        }
    };
    jqxGaugeComponent.prototype.border = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('border', arg);
        }
        else {
            return this.host.jqxGauge('border');
        }
    };
    jqxGaugeComponent.prototype.caption = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('caption', arg);
        }
        else {
            return this.host.jqxGauge('caption');
        }
    };
    jqxGaugeComponent.prototype.cap = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('cap', arg);
        }
        else {
            return this.host.jqxGauge('cap');
        }
    };
    jqxGaugeComponent.prototype.colorScheme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxGauge('colorScheme');
        }
    };
    jqxGaugeComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('disabled', arg);
        }
        else {
            return this.host.jqxGauge('disabled');
        }
    };
    jqxGaugeComponent.prototype.easing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('easing', arg);
        }
        else {
            return this.host.jqxGauge('easing');
        }
    };
    jqxGaugeComponent.prototype.endAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('endAngle', arg);
        }
        else {
            return this.host.jqxGauge('endAngle');
        }
    };
    jqxGaugeComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('height', arg);
        }
        else {
            return this.host.jqxGauge('height');
        }
    };
    jqxGaugeComponent.prototype.int64 = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('int64', arg);
        }
        else {
            return this.host.jqxGauge('int64');
        }
    };
    jqxGaugeComponent.prototype.labels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('labels', arg);
        }
        else {
            return this.host.jqxGauge('labels');
        }
    };
    jqxGaugeComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('min', arg);
        }
        else {
            return this.host.jqxGauge('min');
        }
    };
    jqxGaugeComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('max', arg);
        }
        else {
            return this.host.jqxGauge('max');
        }
    };
    jqxGaugeComponent.prototype.pointer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('pointer', arg);
        }
        else {
            return this.host.jqxGauge('pointer');
        }
    };
    jqxGaugeComponent.prototype.radius = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('radius', arg);
        }
        else {
            return this.host.jqxGauge('radius');
        }
    };
    jqxGaugeComponent.prototype.ranges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ranges', arg);
        }
        else {
            return this.host.jqxGauge('ranges');
        }
    };
    jqxGaugeComponent.prototype.startAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('startAngle', arg);
        }
        else {
            return this.host.jqxGauge('startAngle');
        }
    };
    jqxGaugeComponent.prototype.showRanges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('showRanges', arg);
        }
        else {
            return this.host.jqxGauge('showRanges');
        }
    };
    jqxGaugeComponent.prototype.style = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('style', arg);
        }
        else {
            return this.host.jqxGauge('style');
        }
    };
    jqxGaugeComponent.prototype.ticksMajor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMajor');
        }
    };
    jqxGaugeComponent.prototype.ticksMinor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMinor');
        }
    };
    jqxGaugeComponent.prototype.ticksDistance = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksDistance', arg);
        }
        else {
            return this.host.jqxGauge('ticksDistance');
        }
    };
    jqxGaugeComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('value', arg);
        }
        else {
            return this.host.jqxGauge('value');
        }
    };
    jqxGaugeComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('width', arg);
        }
        else {
            return this.host.jqxGauge('width');
        }
    };
    // jqxGaugeComponent functions
    jqxGaugeComponent.prototype.disable = function () {
        this.host.jqxGauge('disable');
    };
    jqxGaugeComponent.prototype.enable = function () {
        this.host.jqxGauge('enable');
    };
    jqxGaugeComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxGauge("val", value);
        }
        else {
            return this.host.jqxGauge("val");
        }
    };
    ;
    jqxGaugeComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('valueChanging', function (eventData) { _this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
    };
    return jqxGaugeComponent;
}()); //jqxGaugeComponent
__decorate([
    core_1.Input('animationDuration'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    core_1.Input('border'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrBorder", void 0);
__decorate([
    core_1.Input('caption'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrCaption", void 0);
__decorate([
    core_1.Input('cap'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrCap", void 0);
__decorate([
    core_1.Input('colorScheme'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrColorScheme", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('easing'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrEasing", void 0);
__decorate([
    core_1.Input('endAngle'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrEndAngle", void 0);
__decorate([
    core_1.Input('int64'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrInt64", void 0);
__decorate([
    core_1.Input('labels'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrLabels", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrMin", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrMax", void 0);
__decorate([
    core_1.Input('pointer'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrPointer", void 0);
__decorate([
    core_1.Input('radius'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrRadius", void 0);
__decorate([
    core_1.Input('ranges'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrRanges", void 0);
__decorate([
    core_1.Input('startAngle'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrStartAngle", void 0);
__decorate([
    core_1.Input('showRanges'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrShowRanges", void 0);
__decorate([
    core_1.Input('style'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrStyle", void 0);
__decorate([
    core_1.Input('ticksMajor'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrTicksMajor", void 0);
__decorate([
    core_1.Input('ticksMinor'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrTicksMinor", void 0);
__decorate([
    core_1.Input('ticksDistance'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrTicksDistance", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxGaugeComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "onValueChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "onValueChanged", void 0);
jqxGaugeComponent = __decorate([
    core_1.Component({
        selector: 'jqxGauge',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxGaugeComponent);
exports.jqxGaugeComponent = jqxGaugeComponent;
var _a;
