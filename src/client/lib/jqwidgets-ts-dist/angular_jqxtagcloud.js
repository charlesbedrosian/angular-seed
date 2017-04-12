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
var jqxTagCloudComponent = (function () {
    function jqxTagCloudComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['alterTextCase', 'disabled', 'displayLimit', 'displayMember', 'displayValue', 'fontSizeUnit', 'height', 'maxColor', 'maxFontSize', 'maxValueToDisplay', 'minColor', 'minFontSize', 'minValueToDisplay', 'rtl', 'sortBy', 'sortOrder', 'source', 'tagRenderer', 'takeTopWeightedItems', 'textColor', 'urlBase', 'urlMember', 'valueMember', 'width'];
        // jqxTagCloudComponent events
        this.onBindingComplete = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxTagCloudComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTagCloud(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTagCloud(this.properties[i])) {
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxTagCloudComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxTagCloudComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxTagCloudComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTagCloud', options);
        this.__updateRect__();
    };
    jqxTagCloudComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxTagCloudComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxTagCloudComponent.prototype.setOptions = function (options) {
        this.host.jqxTagCloud('setOptions', options);
    };
    // jqxTagCloudComponent properties
    jqxTagCloudComponent.prototype.alterTextCase = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('alterTextCase', arg);
        }
        else {
            return this.host.jqxTagCloud('alterTextCase');
        }
    };
    jqxTagCloudComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('disabled', arg);
        }
        else {
            return this.host.jqxTagCloud('disabled');
        }
    };
    jqxTagCloudComponent.prototype.displayLimit = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayLimit', arg);
        }
        else {
            return this.host.jqxTagCloud('displayLimit');
        }
    };
    jqxTagCloudComponent.prototype.displayMember = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayMember', arg);
        }
        else {
            return this.host.jqxTagCloud('displayMember');
        }
    };
    jqxTagCloudComponent.prototype.displayValue = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayValue', arg);
        }
        else {
            return this.host.jqxTagCloud('displayValue');
        }
    };
    jqxTagCloudComponent.prototype.fontSizeUnit = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('fontSizeUnit', arg);
        }
        else {
            return this.host.jqxTagCloud('fontSizeUnit');
        }
    };
    jqxTagCloudComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('height', arg);
        }
        else {
            return this.host.jqxTagCloud('height');
        }
    };
    jqxTagCloudComponent.prototype.maxColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxColor', arg);
        }
        else {
            return this.host.jqxTagCloud('maxColor');
        }
    };
    jqxTagCloudComponent.prototype.maxFontSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('maxFontSize');
        }
    };
    jqxTagCloudComponent.prototype.maxValueToDisplay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('maxValueToDisplay');
        }
    };
    jqxTagCloudComponent.prototype.minColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minColor', arg);
        }
        else {
            return this.host.jqxTagCloud('minColor');
        }
    };
    jqxTagCloudComponent.prototype.minFontSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('minFontSize');
        }
    };
    jqxTagCloudComponent.prototype.minValueToDisplay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('minValueToDisplay');
        }
    };
    jqxTagCloudComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('rtl', arg);
        }
        else {
            return this.host.jqxTagCloud('rtl');
        }
    };
    jqxTagCloudComponent.prototype.sortBy = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortBy', arg);
        }
        else {
            return this.host.jqxTagCloud('sortBy');
        }
    };
    jqxTagCloudComponent.prototype.sortOrder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortOrder', arg);
        }
        else {
            return this.host.jqxTagCloud('sortOrder');
        }
    };
    jqxTagCloudComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('source', arg);
        }
        else {
            return this.host.jqxTagCloud('source');
        }
    };
    jqxTagCloudComponent.prototype.tagRenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('tagRenderer', arg);
        }
        else {
            return this.host.jqxTagCloud('tagRenderer');
        }
    };
    jqxTagCloudComponent.prototype.takeTopWeightedItems = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('takeTopWeightedItems', arg);
        }
        else {
            return this.host.jqxTagCloud('takeTopWeightedItems');
        }
    };
    jqxTagCloudComponent.prototype.textColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('textColor', arg);
        }
        else {
            return this.host.jqxTagCloud('textColor');
        }
    };
    jqxTagCloudComponent.prototype.urlBase = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlBase', arg);
        }
        else {
            return this.host.jqxTagCloud('urlBase');
        }
    };
    jqxTagCloudComponent.prototype.urlMember = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlMember', arg);
        }
        else {
            return this.host.jqxTagCloud('urlMember');
        }
    };
    jqxTagCloudComponent.prototype.valueMember = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('valueMember', arg);
        }
        else {
            return this.host.jqxTagCloud('valueMember');
        }
    };
    jqxTagCloudComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('width', arg);
        }
        else {
            return this.host.jqxTagCloud('width');
        }
    };
    // jqxTagCloudComponent functions
    jqxTagCloudComponent.prototype.destroy = function () {
        this.host.jqxTagCloud('destroy');
    };
    jqxTagCloudComponent.prototype.findTagIndex = function (tag) {
        return this.host.jqxTagCloud('findTagIndex', tag);
    };
    jqxTagCloudComponent.prototype.getHiddenTagsList = function () {
        return this.host.jqxTagCloud('getHiddenTagsList');
    };
    jqxTagCloudComponent.prototype.getRenderedTags = function () {
        return this.host.jqxTagCloud('getRenderedTags');
    };
    jqxTagCloudComponent.prototype.getTagsList = function () {
        return this.host.jqxTagCloud('getTagsList');
    };
    jqxTagCloudComponent.prototype.hideItem = function (index) {
        this.host.jqxTagCloud('hideItem', index);
    };
    jqxTagCloudComponent.prototype.insertAt = function (index, item) {
        this.host.jqxTagCloud('insertAt', index, item);
    };
    jqxTagCloudComponent.prototype.removeAt = function (index) {
        this.host.jqxTagCloud('removeAt', index);
    };
    jqxTagCloudComponent.prototype.updateAt = function (index, item) {
        this.host.jqxTagCloud('updateAt', index, item);
    };
    jqxTagCloudComponent.prototype.showItem = function (index) {
        this.host.jqxTagCloud('showItem', index);
    };
    jqxTagCloudComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
        this.host.on('itemClick', function (eventData) { _this.onItemClick.emit(eventData); });
    };
    return jqxTagCloudComponent;
}()); //jqxTagCloudComponent
__decorate([
    core_1.Input('alterTextCase'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrAlterTextCase", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('displayLimit'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrDisplayLimit", void 0);
__decorate([
    core_1.Input('displayMember'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrDisplayMember", void 0);
__decorate([
    core_1.Input('displayValue'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrDisplayValue", void 0);
__decorate([
    core_1.Input('fontSizeUnit'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrFontSizeUnit", void 0);
__decorate([
    core_1.Input('maxColor'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrMaxColor", void 0);
__decorate([
    core_1.Input('maxFontSize'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrMaxFontSize", void 0);
__decorate([
    core_1.Input('maxValueToDisplay'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrMaxValueToDisplay", void 0);
__decorate([
    core_1.Input('minColor'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrMinColor", void 0);
__decorate([
    core_1.Input('minFontSize'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrMinFontSize", void 0);
__decorate([
    core_1.Input('minValueToDisplay'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrMinValueToDisplay", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('sortBy'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrSortBy", void 0);
__decorate([
    core_1.Input('sortOrder'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrSortOrder", void 0);
__decorate([
    core_1.Input('source'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrSource", void 0);
__decorate([
    core_1.Input('tagRenderer'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrTagRenderer", void 0);
__decorate([
    core_1.Input('takeTopWeightedItems'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrTakeTopWeightedItems", void 0);
__decorate([
    core_1.Input('textColor'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrTextColor", void 0);
__decorate([
    core_1.Input('urlBase'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrUrlBase", void 0);
__decorate([
    core_1.Input('urlMember'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrUrlMember", void 0);
__decorate([
    core_1.Input('valueMember'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrValueMember", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxTagCloudComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "onBindingComplete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "onItemClick", void 0);
jqxTagCloudComponent = __decorate([
    core_1.Component({
        selector: 'jqxTagCloud',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxTagCloudComponent);
exports.jqxTagCloudComponent = jqxTagCloudComponent;
var _a;
