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
var jqxRangeSelectorComponent = (function () {
    function jqxRangeSelectorComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'labelFormat', 'labelsFormatFunction', 'labelPrecision', 'moveOnClick', 'markerRenderer', 'markerPrecision', 'majorLabelRenderer', 'markerFormat', 'majorTicksInterval', 'minorTicksInterval', 'max', 'min', 'padding', 'range', 'resizable', 'rtl', 'showMinorTicks', 'snapToTicks', 'showMajorLabels', 'showMarkers', 'theme', 'width'];
        // jqxRangeSelectorComponent events
        this.onChange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxRangeSelectorComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRangeSelector(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRangeSelector(this.properties[i])) {
                        this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxRangeSelectorComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxRangeSelectorComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxRangeSelectorComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRangeSelector', options);
        this.__updateRect__();
    };
    jqxRangeSelectorComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxRangeSelectorComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxRangeSelectorComponent.prototype.setOptions = function (options) {
        this.host.jqxRangeSelector('setOptions', options);
    };
    // jqxRangeSelectorComponent properties
    jqxRangeSelectorComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('disabled', arg);
        }
        else {
            return this.host.jqxRangeSelector('disabled');
        }
    };
    jqxRangeSelectorComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('height', arg);
        }
        else {
            return this.host.jqxRangeSelector('height');
        }
    };
    jqxRangeSelectorComponent.prototype.labelFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelFormat');
        }
    };
    jqxRangeSelectorComponent.prototype.labelsFormatFunction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormatFunction');
        }
    };
    jqxRangeSelectorComponent.prototype.labelPrecision = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelPrecision', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelPrecision');
        }
    };
    jqxRangeSelectorComponent.prototype.moveOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('moveOnClick', arg);
        }
        else {
            return this.host.jqxRangeSelector('moveOnClick');
        }
    };
    jqxRangeSelectorComponent.prototype.markerRenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markerRenderer', arg);
        }
        else {
            return this.host.jqxRangeSelector('markerRenderer');
        }
    };
    jqxRangeSelectorComponent.prototype.markerPrecision = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markerPrecision', arg);
        }
        else {
            return this.host.jqxRangeSelector('markerPrecision');
        }
    };
    jqxRangeSelectorComponent.prototype.majorLabelRenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('majorLabelRenderer', arg);
        }
        else {
            return this.host.jqxRangeSelector('majorLabelRenderer');
        }
    };
    jqxRangeSelectorComponent.prototype.markerFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markerFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('markerFormat');
        }
    };
    jqxRangeSelectorComponent.prototype.majorTicksInterval = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('majorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('majorTicksInterval');
        }
    };
    jqxRangeSelectorComponent.prototype.minorTicksInterval = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('minorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('minorTicksInterval');
        }
    };
    jqxRangeSelectorComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('max', arg);
        }
        else {
            return this.host.jqxRangeSelector('max');
        }
    };
    jqxRangeSelectorComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('min', arg);
        }
        else {
            return this.host.jqxRangeSelector('min');
        }
    };
    jqxRangeSelectorComponent.prototype.padding = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('padding', arg);
        }
        else {
            return this.host.jqxRangeSelector('padding');
        }
    };
    jqxRangeSelectorComponent.prototype.range = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('range', arg);
        }
        else {
            return this.host.jqxRangeSelector('range');
        }
    };
    jqxRangeSelectorComponent.prototype.resizable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('resizable', arg);
        }
        else {
            return this.host.jqxRangeSelector('resizable');
        }
    };
    jqxRangeSelectorComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('rtl', arg);
        }
        else {
            return this.host.jqxRangeSelector('rtl');
        }
    };
    jqxRangeSelectorComponent.prototype.showMinorTicks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMinorTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMinorTicks');
        }
    };
    jqxRangeSelectorComponent.prototype.snapToTicks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('snapToTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('snapToTicks');
        }
    };
    jqxRangeSelectorComponent.prototype.showMajorLabels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMajorLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMajorLabels');
        }
    };
    jqxRangeSelectorComponent.prototype.showMarkers = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMarkers', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMarkers');
        }
    };
    jqxRangeSelectorComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('theme', arg);
        }
        else {
            return this.host.jqxRangeSelector('theme');
        }
    };
    jqxRangeSelectorComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('width', arg);
        }
        else {
            return this.host.jqxRangeSelector('width');
        }
    };
    // jqxRangeSelectorComponent functions
    jqxRangeSelectorComponent.prototype.destroy = function () {
        this.host.jqxRangeSelector('destroy');
    };
    jqxRangeSelectorComponent.prototype.getRange = function () {
        return this.host.jqxRangeSelector('getRange');
    };
    jqxRangeSelectorComponent.prototype.render = function () {
        this.host.jqxRangeSelector('render');
    };
    jqxRangeSelectorComponent.prototype.refresh = function () {
        this.host.jqxRangeSelector('refresh');
    };
    jqxRangeSelectorComponent.prototype.setRange = function (from, to) {
        this.host.jqxRangeSelector('setRange', from, to);
    };
    jqxRangeSelectorComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    return jqxRangeSelectorComponent;
}()); //jqxRangeSelectorComponent
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('labelFormat'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrLabelFormat", void 0);
__decorate([
    core_1.Input('labelsFormatFunction'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrLabelsFormatFunction", void 0);
__decorate([
    core_1.Input('labelPrecision'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrLabelPrecision", void 0);
__decorate([
    core_1.Input('moveOnClick'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMoveOnClick", void 0);
__decorate([
    core_1.Input('markerRenderer'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMarkerRenderer", void 0);
__decorate([
    core_1.Input('markerPrecision'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMarkerPrecision", void 0);
__decorate([
    core_1.Input('majorLabelRenderer'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMajorLabelRenderer", void 0);
__decorate([
    core_1.Input('markerFormat'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMarkerFormat", void 0);
__decorate([
    core_1.Input('majorTicksInterval'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMajorTicksInterval", void 0);
__decorate([
    core_1.Input('minorTicksInterval'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMinorTicksInterval", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMax", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrMin", void 0);
__decorate([
    core_1.Input('padding'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrPadding", void 0);
__decorate([
    core_1.Input('range'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrRange", void 0);
__decorate([
    core_1.Input('resizable'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrResizable", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('showMinorTicks'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrShowMinorTicks", void 0);
__decorate([
    core_1.Input('snapToTicks'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrSnapToTicks", void 0);
__decorate([
    core_1.Input('showMajorLabels'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrShowMajorLabels", void 0);
__decorate([
    core_1.Input('showMarkers'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrShowMarkers", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxRangeSelectorComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxRangeSelectorComponent.prototype, "onChange", void 0);
jqxRangeSelectorComponent = __decorate([
    core_1.Component({
        selector: 'jqxRangeSelector',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxRangeSelectorComponent);
exports.jqxRangeSelectorComponent = jqxRangeSelectorComponent;
var _a;
