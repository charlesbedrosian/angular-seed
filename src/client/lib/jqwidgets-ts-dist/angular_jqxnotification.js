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
var jqxNotificationComponent = (function () {
    function jqxNotificationComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['appendContainer', 'autoOpen', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'autoCloseDelay', 'blink', 'browserBoundsOffset', 'closeOnClick', 'disabled', 'height', 'hoverOpacity', 'icon', 'notificationOffset', 'opacity', 'position', 'rtl', 'showCloseButton', 'template', 'theme', 'width'];
        // jqxNotificationComponent events
        this.onClose = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxNotificationComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNotification(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNotification(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNotification(this.properties[i])) {
                        this.host.jqxNotification(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxNotificationComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxNotificationComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxNotificationComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNotification', options);
        this.__updateRect__();
    };
    jqxNotificationComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxNotificationComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxNotificationComponent.prototype.setOptions = function (options) {
        this.host.jqxNotification('setOptions', options);
    };
    // jqxNotificationComponent properties
    jqxNotificationComponent.prototype.appendContainer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('appendContainer', arg);
        }
        else {
            return this.host.jqxNotification('appendContainer');
        }
    };
    jqxNotificationComponent.prototype.autoOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoOpen', arg);
        }
        else {
            return this.host.jqxNotification('autoOpen');
        }
    };
    jqxNotificationComponent.prototype.animationOpenDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationOpenDelay');
        }
    };
    jqxNotificationComponent.prototype.animationCloseDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationCloseDelay');
        }
    };
    jqxNotificationComponent.prototype.autoClose = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoClose', arg);
        }
        else {
            return this.host.jqxNotification('autoClose');
        }
    };
    jqxNotificationComponent.prototype.autoCloseDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('autoCloseDelay');
        }
    };
    jqxNotificationComponent.prototype.blink = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('blink', arg);
        }
        else {
            return this.host.jqxNotification('blink');
        }
    };
    jqxNotificationComponent.prototype.browserBoundsOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('browserBoundsOffset', arg);
        }
        else {
            return this.host.jqxNotification('browserBoundsOffset');
        }
    };
    jqxNotificationComponent.prototype.closeOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('closeOnClick', arg);
        }
        else {
            return this.host.jqxNotification('closeOnClick');
        }
    };
    jqxNotificationComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('disabled', arg);
        }
        else {
            return this.host.jqxNotification('disabled');
        }
    };
    jqxNotificationComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('height', arg);
        }
        else {
            return this.host.jqxNotification('height');
        }
    };
    jqxNotificationComponent.prototype.hoverOpacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('hoverOpacity', arg);
        }
        else {
            return this.host.jqxNotification('hoverOpacity');
        }
    };
    jqxNotificationComponent.prototype.icon = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('icon', arg);
        }
        else {
            return this.host.jqxNotification('icon');
        }
    };
    jqxNotificationComponent.prototype.notificationOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('notificationOffset', arg);
        }
        else {
            return this.host.jqxNotification('notificationOffset');
        }
    };
    jqxNotificationComponent.prototype.opacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('opacity', arg);
        }
        else {
            return this.host.jqxNotification('opacity');
        }
    };
    jqxNotificationComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('position', arg);
        }
        else {
            return this.host.jqxNotification('position');
        }
    };
    jqxNotificationComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('rtl', arg);
        }
        else {
            return this.host.jqxNotification('rtl');
        }
    };
    jqxNotificationComponent.prototype.showCloseButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('showCloseButton', arg);
        }
        else {
            return this.host.jqxNotification('showCloseButton');
        }
    };
    jqxNotificationComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('template', arg);
        }
        else {
            return this.host.jqxNotification('template');
        }
    };
    jqxNotificationComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('theme', arg);
        }
        else {
            return this.host.jqxNotification('theme');
        }
    };
    jqxNotificationComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('width', arg);
        }
        else {
            return this.host.jqxNotification('width');
        }
    };
    // jqxNotificationComponent functions
    jqxNotificationComponent.prototype.closeAll = function () {
        this.host.jqxNotification('closeAll');
    };
    jqxNotificationComponent.prototype.closeLast = function () {
        this.host.jqxNotification('closeLast');
    };
    jqxNotificationComponent.prototype.destroy = function () {
        this.host.jqxNotification('destroy');
    };
    jqxNotificationComponent.prototype.open = function () {
        this.host.jqxNotification('open');
    };
    jqxNotificationComponent.prototype.refresh = function () {
        this.host.jqxNotification('refresh');
    };
    jqxNotificationComponent.prototype.render = function () {
        this.host.jqxNotification('render');
    };
    jqxNotificationComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    return jqxNotificationComponent;
}()); //jqxNotificationComponent
__decorate([
    core_1.Input('appendContainer'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrAppendContainer", void 0);
__decorate([
    core_1.Input('autoOpen'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrAutoOpen", void 0);
__decorate([
    core_1.Input('animationOpenDelay'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrAnimationOpenDelay", void 0);
__decorate([
    core_1.Input('animationCloseDelay'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrAnimationCloseDelay", void 0);
__decorate([
    core_1.Input('autoClose'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrAutoClose", void 0);
__decorate([
    core_1.Input('autoCloseDelay'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrAutoCloseDelay", void 0);
__decorate([
    core_1.Input('blink'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrBlink", void 0);
__decorate([
    core_1.Input('browserBoundsOffset'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrBrowserBoundsOffset", void 0);
__decorate([
    core_1.Input('closeOnClick'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrCloseOnClick", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('hoverOpacity'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrHoverOpacity", void 0);
__decorate([
    core_1.Input('icon'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrIcon", void 0);
__decorate([
    core_1.Input('notificationOffset'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrNotificationOffset", void 0);
__decorate([
    core_1.Input('opacity'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrOpacity", void 0);
__decorate([
    core_1.Input('position'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrPosition", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('showCloseButton'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrShowCloseButton", void 0);
__decorate([
    core_1.Input('template'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrTemplate", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxNotificationComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "onClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxNotificationComponent.prototype, "onOpen", void 0);
jqxNotificationComponent = __decorate([
    core_1.Component({
        selector: 'jqxNotification',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxNotificationComponent);
exports.jqxNotificationComponent = jqxNotificationComponent;
var _a;
