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
var jqxRibbonComponent = (function () {
    function jqxRibbonComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['animationType', 'animationDelay', 'disabled', 'height', 'initContent', 'mode', 'popupCloseMode', 'position', 'rtl', 'selectedIndex', 'selectionMode', 'scrollPosition', 'scrollStep', 'scrollDelay', 'theme', 'width'];
        // jqxRibbonComponent events
        this.onChange = new core_1.EventEmitter();
        this.onReorder = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onUnselect = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxRibbonComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRibbon(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRibbon(this.properties[i])) {
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxRibbonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxRibbonComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxRibbonComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRibbon', options);
        this.__updateRect__();
    };
    jqxRibbonComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxRibbonComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxRibbonComponent.prototype.setOptions = function (options) {
        this.host.jqxRibbon('setOptions', options);
    };
    // jqxRibbonComponent properties
    jqxRibbonComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationType', arg);
        }
        else {
            return this.host.jqxRibbon('animationType');
        }
    };
    jqxRibbonComponent.prototype.animationDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationDelay', arg);
        }
        else {
            return this.host.jqxRibbon('animationDelay');
        }
    };
    jqxRibbonComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('disabled', arg);
        }
        else {
            return this.host.jqxRibbon('disabled');
        }
    };
    jqxRibbonComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('height', arg);
        }
        else {
            return this.host.jqxRibbon('height');
        }
    };
    jqxRibbonComponent.prototype.initContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('initContent', arg);
        }
        else {
            return this.host.jqxRibbon('initContent');
        }
    };
    jqxRibbonComponent.prototype.mode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('mode', arg);
        }
        else {
            return this.host.jqxRibbon('mode');
        }
    };
    jqxRibbonComponent.prototype.popupCloseMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('popupCloseMode', arg);
        }
        else {
            return this.host.jqxRibbon('popupCloseMode');
        }
    };
    jqxRibbonComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('position', arg);
        }
        else {
            return this.host.jqxRibbon('position');
        }
    };
    jqxRibbonComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('rtl', arg);
        }
        else {
            return this.host.jqxRibbon('rtl');
        }
    };
    jqxRibbonComponent.prototype.selectedIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectedIndex', arg);
        }
        else {
            return this.host.jqxRibbon('selectedIndex');
        }
    };
    jqxRibbonComponent.prototype.selectionMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectionMode', arg);
        }
        else {
            return this.host.jqxRibbon('selectionMode');
        }
    };
    jqxRibbonComponent.prototype.scrollPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollPosition', arg);
        }
        else {
            return this.host.jqxRibbon('scrollPosition');
        }
    };
    jqxRibbonComponent.prototype.scrollStep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollStep', arg);
        }
        else {
            return this.host.jqxRibbon('scrollStep');
        }
    };
    jqxRibbonComponent.prototype.scrollDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollDelay', arg);
        }
        else {
            return this.host.jqxRibbon('scrollDelay');
        }
    };
    jqxRibbonComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('theme', arg);
        }
        else {
            return this.host.jqxRibbon('theme');
        }
    };
    jqxRibbonComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('width', arg);
        }
        else {
            return this.host.jqxRibbon('width');
        }
    };
    // jqxRibbonComponent functions
    jqxRibbonComponent.prototype.addAt = function (index, item) {
        this.host.jqxRibbon('addAt', index, item);
    };
    jqxRibbonComponent.prototype.clearSelection = function () {
        this.host.jqxRibbon('clearSelection');
    };
    jqxRibbonComponent.prototype.disableAt = function (index) {
        this.host.jqxRibbon('disableAt', index);
    };
    jqxRibbonComponent.prototype.destroy = function () {
        this.host.jqxRibbon('destroy');
    };
    jqxRibbonComponent.prototype.enableAt = function (index) {
        this.host.jqxRibbon('enableAt', index);
    };
    jqxRibbonComponent.prototype.hideAt = function (index) {
        this.host.jqxRibbon('hideAt', index);
    };
    jqxRibbonComponent.prototype.removeAt = function (index) {
        this.host.jqxRibbon('removeAt', index);
    };
    jqxRibbonComponent.prototype.render = function () {
        this.host.jqxRibbon('render');
    };
    jqxRibbonComponent.prototype.refresh = function () {
        this.host.jqxRibbon('refresh');
    };
    jqxRibbonComponent.prototype.selectAt = function (index) {
        this.host.jqxRibbon('selectAt', index);
    };
    jqxRibbonComponent.prototype.showAt = function (index) {
        this.host.jqxRibbon('showAt', index);
    };
    jqxRibbonComponent.prototype.setPopupLayout = function (index, layout, width, height) {
        this.host.jqxRibbon('setPopupLayout', index, layout, width, height);
    };
    jqxRibbonComponent.prototype.updateAt = function (index, item) {
        this.host.jqxRibbon('updateAt', index, item);
    };
    jqxRibbonComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxRibbon("val", value);
        }
        else {
            return this.host.jqxRibbon("val");
        }
    };
    ;
    jqxRibbonComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        this.host.on('reorder', function (eventData) { _this.onReorder.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
    };
    return jqxRibbonComponent;
}()); //jqxRibbonComponent
__decorate([
    core_1.Input('animationType'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrAnimationType", void 0);
__decorate([
    core_1.Input('animationDelay'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrAnimationDelay", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('initContent'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrInitContent", void 0);
__decorate([
    core_1.Input('mode'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrMode", void 0);
__decorate([
    core_1.Input('popupCloseMode'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrPopupCloseMode", void 0);
__decorate([
    core_1.Input('position'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrPosition", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('selectedIndex'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrSelectedIndex", void 0);
__decorate([
    core_1.Input('selectionMode'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrSelectionMode", void 0);
__decorate([
    core_1.Input('scrollPosition'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrScrollPosition", void 0);
__decorate([
    core_1.Input('scrollStep'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrScrollStep", void 0);
__decorate([
    core_1.Input('scrollDelay'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrScrollDelay", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxRibbonComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "onReorder", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxRibbonComponent.prototype, "onUnselect", void 0);
jqxRibbonComponent = __decorate([
    core_1.Component({
        selector: 'jqxRibbon',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxRibbonComponent);
exports.jqxRibbonComponent = jqxRibbonComponent;
var _a;
