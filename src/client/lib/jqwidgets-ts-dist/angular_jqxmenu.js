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
var jqxMenuComponent = (function () {
    function jqxMenuComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'animationHideDelay', 'animationShowDelay', 'autoCloseInterval', 'autoSizeMainItems', 'autoCloseOnClick', 'autoOpenPopup', 'autoOpen', 'clickToOpen', 'disabled', 'enableHover', 'easing', 'height', 'keyboardNavigation', 'minimizeWidth', 'mode', 'popupZIndex', 'rtl', 'showTopLevelArrows', 'source', 'theme', 'width'];
        // jqxMenuComponent events
        this.onClosed = new core_1.EventEmitter();
        this.onItemclick = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxMenuComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMenu(this.properties[i])) {
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxMenuComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxMenuComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxMenuComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMenu', options);
        this.__updateRect__();
    };
    jqxMenuComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxMenuComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxMenuComponent.prototype.setOptions = function (options) {
        this.host.jqxMenu('setOptions', options);
    };
    // jqxMenuComponent properties
    jqxMenuComponent.prototype.animationShowDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDuration');
        }
    };
    jqxMenuComponent.prototype.animationHideDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDuration');
        }
    };
    jqxMenuComponent.prototype.animationHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDelay');
        }
    };
    jqxMenuComponent.prototype.animationShowDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDelay');
        }
    };
    jqxMenuComponent.prototype.autoCloseInterval = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseInterval', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseInterval');
        }
    };
    jqxMenuComponent.prototype.autoSizeMainItems = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoSizeMainItems', arg);
        }
        else {
            return this.host.jqxMenu('autoSizeMainItems');
        }
    };
    jqxMenuComponent.prototype.autoCloseOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnClick', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnClick');
        }
    };
    jqxMenuComponent.prototype.autoOpenPopup = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpenPopup', arg);
        }
        else {
            return this.host.jqxMenu('autoOpenPopup');
        }
    };
    jqxMenuComponent.prototype.autoOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpen', arg);
        }
        else {
            return this.host.jqxMenu('autoOpen');
        }
    };
    jqxMenuComponent.prototype.clickToOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('clickToOpen', arg);
        }
        else {
            return this.host.jqxMenu('clickToOpen');
        }
    };
    jqxMenuComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('disabled', arg);
        }
        else {
            return this.host.jqxMenu('disabled');
        }
    };
    jqxMenuComponent.prototype.enableHover = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('enableHover', arg);
        }
        else {
            return this.host.jqxMenu('enableHover');
        }
    };
    jqxMenuComponent.prototype.easing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('easing', arg);
        }
        else {
            return this.host.jqxMenu('easing');
        }
    };
    jqxMenuComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('height', arg);
        }
        else {
            return this.host.jqxMenu('height');
        }
    };
    jqxMenuComponent.prototype.keyboardNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxMenu('keyboardNavigation');
        }
    };
    jqxMenuComponent.prototype.minimizeWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('minimizeWidth', arg);
        }
        else {
            return this.host.jqxMenu('minimizeWidth');
        }
    };
    jqxMenuComponent.prototype.mode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('mode', arg);
        }
        else {
            return this.host.jqxMenu('mode');
        }
    };
    jqxMenuComponent.prototype.popupZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('popupZIndex', arg);
        }
        else {
            return this.host.jqxMenu('popupZIndex');
        }
    };
    jqxMenuComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('rtl', arg);
        }
        else {
            return this.host.jqxMenu('rtl');
        }
    };
    jqxMenuComponent.prototype.showTopLevelArrows = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('showTopLevelArrows', arg);
        }
        else {
            return this.host.jqxMenu('showTopLevelArrows');
        }
    };
    jqxMenuComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('source', arg);
        }
        else {
            return this.host.jqxMenu('source');
        }
    };
    jqxMenuComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('theme', arg);
        }
        else {
            return this.host.jqxMenu('theme');
        }
    };
    jqxMenuComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('width', arg);
        }
        else {
            return this.host.jqxMenu('width');
        }
    };
    // jqxMenuComponent functions
    jqxMenuComponent.prototype.closeItem = function (itemID) {
        this.host.jqxMenu('closeItem', itemID);
    };
    jqxMenuComponent.prototype.close = function () {
        this.host.jqxMenu('close');
    };
    jqxMenuComponent.prototype.disable = function (itemID, value) {
        this.host.jqxMenu('disable', itemID, value);
    };
    jqxMenuComponent.prototype.destroy = function () {
        this.host.jqxMenu('destroy');
    };
    jqxMenuComponent.prototype.focus = function () {
        this.host.jqxMenu('focus');
    };
    jqxMenuComponent.prototype.minimize = function () {
        this.host.jqxMenu('minimize');
    };
    jqxMenuComponent.prototype.open = function (left, top) {
        this.host.jqxMenu('open', left, top);
    };
    jqxMenuComponent.prototype.openItem = function (itemID) {
        this.host.jqxMenu('openItem', itemID);
    };
    jqxMenuComponent.prototype.restore = function () {
        this.host.jqxMenu('restore');
    };
    jqxMenuComponent.prototype.setItemOpenDirection = function (item, horizontaldirection, verticaldirection) {
        this.host.jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);
    };
    jqxMenuComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('closed', function (eventData) { _this.onClosed.emit(eventData); });
        this.host.on('itemclick', function (eventData) { _this.onItemclick.emit(eventData); });
        this.host.on('initialized', function (eventData) { _this.onInitialized.emit(eventData); });
        this.host.on('shown', function (eventData) { _this.onShown.emit(eventData); });
    };
    return jqxMenuComponent;
}()); //jqxMenuComponent
__decorate([
    core_1.Input('animationShowDuration'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrAnimationShowDuration", void 0);
__decorate([
    core_1.Input('animationHideDuration'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrAnimationHideDuration", void 0);
__decorate([
    core_1.Input('animationHideDelay'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrAnimationHideDelay", void 0);
__decorate([
    core_1.Input('animationShowDelay'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrAnimationShowDelay", void 0);
__decorate([
    core_1.Input('autoCloseInterval'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrAutoCloseInterval", void 0);
__decorate([
    core_1.Input('autoSizeMainItems'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrAutoSizeMainItems", void 0);
__decorate([
    core_1.Input('autoCloseOnClick'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrAutoCloseOnClick", void 0);
__decorate([
    core_1.Input('autoOpenPopup'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrAutoOpenPopup", void 0);
__decorate([
    core_1.Input('autoOpen'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrAutoOpen", void 0);
__decorate([
    core_1.Input('clickToOpen'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrClickToOpen", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('enableHover'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrEnableHover", void 0);
__decorate([
    core_1.Input('easing'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrEasing", void 0);
__decorate([
    core_1.Input('keyboardNavigation'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrKeyboardNavigation", void 0);
__decorate([
    core_1.Input('minimizeWidth'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrMinimizeWidth", void 0);
__decorate([
    core_1.Input('mode'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrMode", void 0);
__decorate([
    core_1.Input('popupZIndex'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrPopupZIndex", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('showTopLevelArrows'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrShowTopLevelArrows", void 0);
__decorate([
    core_1.Input('source'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrSource", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "onClosed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "onItemclick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "onInitialized", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "onShown", void 0);
jqxMenuComponent = __decorate([
    core_1.Component({
        selector: 'jqxMenu',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxMenuComponent);
exports.jqxMenuComponent = jqxMenuComponent;
var _a;
