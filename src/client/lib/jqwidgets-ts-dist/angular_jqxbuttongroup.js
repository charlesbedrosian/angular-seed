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
var jqxButtonGroupComponent = (function () {
    function jqxButtonGroupComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['disabled', 'enableHover', 'mode', 'rtl', 'template', 'theme'];
        // jqxButtonGroupComponent events
        this.onButtonclick = new core_1.EventEmitter();
        this.onSelected = new core_1.EventEmitter();
        this.onUnselected = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxButtonGroupComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxButtonGroup(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxButtonGroup(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxButtonGroup(this.properties[i])) {
                        this.host.jqxButtonGroup(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxButtonGroupComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxButtonGroupComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxButtonGroupComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.host[0].style.marginLeft = '1px';
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButtonGroup', options);
        this.__updateRect__();
    };
    jqxButtonGroupComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxButtonGroupComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxButtonGroupComponent.prototype.setOptions = function (options) {
        this.host.jqxButtonGroup('setOptions', options);
    };
    // jqxButtonGroupComponent properties
    jqxButtonGroupComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('disabled', arg);
        }
        else {
            return this.host.jqxButtonGroup('disabled');
        }
    };
    jqxButtonGroupComponent.prototype.enableHover = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('enableHover', arg);
        }
        else {
            return this.host.jqxButtonGroup('enableHover');
        }
    };
    jqxButtonGroupComponent.prototype.mode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('mode', arg);
        }
        else {
            return this.host.jqxButtonGroup('mode');
        }
    };
    jqxButtonGroupComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('rtl', arg);
        }
        else {
            return this.host.jqxButtonGroup('rtl');
        }
    };
    jqxButtonGroupComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('template', arg);
        }
        else {
            return this.host.jqxButtonGroup('template');
        }
    };
    jqxButtonGroupComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('theme', arg);
        }
        else {
            return this.host.jqxButtonGroup('theme');
        }
    };
    // jqxButtonGroupComponent functions
    jqxButtonGroupComponent.prototype.disableAt = function (index) {
        this.host.jqxButtonGroup('disableAt', index);
    };
    jqxButtonGroupComponent.prototype.disable = function () {
        this.host.jqxButtonGroup('disable');
    };
    jqxButtonGroupComponent.prototype.destroy = function () {
        this.host.jqxButtonGroup('destroy');
    };
    jqxButtonGroupComponent.prototype.enable = function () {
        this.host.jqxButtonGroup('enable');
    };
    jqxButtonGroupComponent.prototype.enableAt = function (index) {
        this.host.jqxButtonGroup('enableAt', index);
    };
    jqxButtonGroupComponent.prototype.focus = function () {
        this.host.jqxButtonGroup('focus');
    };
    jqxButtonGroupComponent.prototype.getSelection = function () {
        return this.host.jqxButtonGroup('getSelection');
    };
    jqxButtonGroupComponent.prototype.render = function () {
        this.host.jqxButtonGroup('render');
    };
    jqxButtonGroupComponent.prototype.setSelection = function (index) {
        this.host.jqxButtonGroup('setSelection', index);
    };
    jqxButtonGroupComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('buttonclick', function (eventData) { _this.onButtonclick.emit(eventData); });
        this.host.on('selected', function (eventData) { _this.onSelected.emit(eventData); });
        this.host.on('unselected', function (eventData) { _this.onUnselected.emit(eventData); });
    };
    return jqxButtonGroupComponent;
}()); //jqxButtonGroupComponent
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('enableHover'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrEnableHover", void 0);
__decorate([
    core_1.Input('mode'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrMode", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('template'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrTemplate", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxButtonGroupComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "onButtonclick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "onSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxButtonGroupComponent.prototype, "onUnselected", void 0);
jqxButtonGroupComponent = __decorate([
    core_1.Component({
        selector: 'jqxButtonGroup',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxButtonGroupComponent);
exports.jqxButtonGroupComponent = jqxButtonGroupComponent;
var _a;
