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
var jqxBulletChartComponent = (function () {
    function jqxBulletChartComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['animationDuration', 'barSize', 'description', 'disabled', 'height', 'labelsFormat', 'labelsFormatFunction', 'orientation', 'pointer', 'rtl', 'ranges', 'showTooltip', 'target', 'ticks', 'title', 'tooltipFormatFunction', 'width'];
        // jqxBulletChartComponent events
        this.onChange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxBulletChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxBulletChart(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxBulletChart(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxBulletChart(this.properties[i])) {
                        this.host.jqxBulletChart(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxBulletChartComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxBulletChartComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxBulletChartComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBulletChart', options);
        this.__updateRect__();
    };
    jqxBulletChartComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxBulletChartComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxBulletChartComponent.prototype.setOptions = function (options) {
        this.host.jqxBulletChart('setOptions', options);
    };
    // jqxBulletChartComponent properties
    jqxBulletChartComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('animationDuration', arg);
        }
        else {
            return this.host.jqxBulletChart('animationDuration');
        }
    };
    jqxBulletChartComponent.prototype.barSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('barSize', arg);
        }
        else {
            return this.host.jqxBulletChart('barSize');
        }
    };
    jqxBulletChartComponent.prototype.description = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('description', arg);
        }
        else {
            return this.host.jqxBulletChart('description');
        }
    };
    jqxBulletChartComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('disabled', arg);
        }
        else {
            return this.host.jqxBulletChart('disabled');
        }
    };
    jqxBulletChartComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('height', arg);
        }
        else {
            return this.host.jqxBulletChart('height');
        }
    };
    jqxBulletChartComponent.prototype.labelsFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('labelsFormat', arg);
        }
        else {
            return this.host.jqxBulletChart('labelsFormat');
        }
    };
    jqxBulletChartComponent.prototype.labelsFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxBulletChart('labelsFormatFunction');
        }
    };
    jqxBulletChartComponent.prototype.orientation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('orientation', arg);
        }
        else {
            return this.host.jqxBulletChart('orientation');
        }
    };
    jqxBulletChartComponent.prototype.pointer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('pointer', arg);
        }
        else {
            return this.host.jqxBulletChart('pointer');
        }
    };
    jqxBulletChartComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('rtl', arg);
        }
        else {
            return this.host.jqxBulletChart('rtl');
        }
    };
    jqxBulletChartComponent.prototype.ranges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('ranges', arg);
        }
        else {
            return this.host.jqxBulletChart('ranges');
        }
    };
    jqxBulletChartComponent.prototype.showTooltip = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('showTooltip', arg);
        }
        else {
            return this.host.jqxBulletChart('showTooltip');
        }
    };
    jqxBulletChartComponent.prototype.target = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('target', arg);
        }
        else {
            return this.host.jqxBulletChart('target');
        }
    };
    jqxBulletChartComponent.prototype.ticks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('ticks', arg);
        }
        else {
            return this.host.jqxBulletChart('ticks');
        }
    };
    jqxBulletChartComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('title', arg);
        }
        else {
            return this.host.jqxBulletChart('title');
        }
    };
    jqxBulletChartComponent.prototype.tooltipFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('tooltipFormatFunction', arg);
        }
        else {
            return this.host.jqxBulletChart('tooltipFormatFunction');
        }
    };
    jqxBulletChartComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxBulletChart('width', arg);
        }
        else {
            return this.host.jqxBulletChart('width');
        }
    };
    // jqxBulletChartComponent functions
    jqxBulletChartComponent.prototype.destroy = function () {
        this.host.jqxBulletChart('destroy');
    };
    jqxBulletChartComponent.prototype.render = function () {
        this.host.jqxBulletChart('render');
    };
    jqxBulletChartComponent.prototype.refresh = function () {
        this.host.jqxBulletChart('refresh');
    };
    jqxBulletChartComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxBulletChart("val", value);
        }
        else {
            return this.host.jqxBulletChart("val");
        }
    };
    ;
    jqxBulletChartComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    return jqxBulletChartComponent;
}()); //jqxBulletChartComponent
__decorate([
    core_1.Input('animationDuration'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    core_1.Input('barSize'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrBarSize", void 0);
__decorate([
    core_1.Input('description'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrDescription", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('labelsFormat'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrLabelsFormat", void 0);
__decorate([
    core_1.Input('labelsFormatFunction'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrLabelsFormatFunction", void 0);
__decorate([
    core_1.Input('orientation'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrOrientation", void 0);
__decorate([
    core_1.Input('pointer'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrPointer", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('ranges'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrRanges", void 0);
__decorate([
    core_1.Input('showTooltip'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrShowTooltip", void 0);
__decorate([
    core_1.Input('target'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrTarget", void 0);
__decorate([
    core_1.Input('ticks'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrTicks", void 0);
__decorate([
    core_1.Input('title'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrTitle", void 0);
__decorate([
    core_1.Input('tooltipFormatFunction'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrTooltipFormatFunction", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxBulletChartComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxBulletChartComponent.prototype, "onChange", void 0);
jqxBulletChartComponent = __decorate([
    core_1.Component({
        selector: 'jqxBulletChart',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxBulletChartComponent);
exports.jqxBulletChartComponent = jqxBulletChartComponent;
var _a;
