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
var jqxToggleButtonComponent = (function () {
    function jqxToggleButtonComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
        // jqxToggleButtonComponent events
        this.onClick = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxToggleButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxToggleButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxToggleButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxToggleButton(this.properties[i])) {
                        this.host.jqxToggleButton(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxToggleButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxToggleButtonComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxToggleButtonComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToggleButton', options);
        this.__updateRect__();
    };
    jqxToggleButtonComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxToggleButtonComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxToggleButtonComponent.prototype.setOptions = function (options) {
        this.host.jqxToggleButton('setOptions', options);
    };
    // jqxToggleButtonComponent properties
    jqxToggleButtonComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('disabled', arg);
        }
        else {
            return this.host.jqxToggleButton('disabled');
        }
    };
    jqxToggleButtonComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('height', arg);
        }
        else {
            return this.host.jqxToggleButton('height');
        }
    };
    jqxToggleButtonComponent.prototype.imgSrc = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgSrc', arg);
        }
        else {
            return this.host.jqxToggleButton('imgSrc');
        }
    };
    jqxToggleButtonComponent.prototype.imgWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgWidth', arg);
        }
        else {
            return this.host.jqxToggleButton('imgWidth');
        }
    };
    jqxToggleButtonComponent.prototype.imgHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgHeight', arg);
        }
        else {
            return this.host.jqxToggleButton('imgHeight');
        }
    };
    jqxToggleButtonComponent.prototype.imgPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgPosition', arg);
        }
        else {
            return this.host.jqxToggleButton('imgPosition');
        }
    };
    jqxToggleButtonComponent.prototype.roundedCorners = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxToggleButton('roundedCorners');
        }
    };
    jqxToggleButtonComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('rtl', arg);
        }
        else {
            return this.host.jqxToggleButton('rtl');
        }
    };
    jqxToggleButtonComponent.prototype.textPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('textPosition', arg);
        }
        else {
            return this.host.jqxToggleButton('textPosition');
        }
    };
    jqxToggleButtonComponent.prototype.textImageRelation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxToggleButton('textImageRelation');
        }
    };
    jqxToggleButtonComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('theme', arg);
        }
        else {
            return this.host.jqxToggleButton('theme');
        }
    };
    jqxToggleButtonComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('template', arg);
        }
        else {
            return this.host.jqxToggleButton('template');
        }
    };
    jqxToggleButtonComponent.prototype.toggled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('toggled', arg);
        }
        else {
            return this.host.jqxToggleButton('toggled');
        }
    };
    jqxToggleButtonComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('width', arg);
        }
        else {
            return this.host.jqxToggleButton('width');
        }
    };
    jqxToggleButtonComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('value', arg);
        }
        else {
            return this.host.jqxToggleButton('value');
        }
    };
    // jqxToggleButtonComponent functions
    jqxToggleButtonComponent.prototype.check = function () {
        this.host.jqxToggleButton('check');
    };
    jqxToggleButtonComponent.prototype.destroy = function () {
        this.host.jqxToggleButton('destroy');
    };
    jqxToggleButtonComponent.prototype.focus = function () {
        this.host.jqxToggleButton('focus');
    };
    jqxToggleButtonComponent.prototype.render = function () {
        this.host.jqxToggleButton('render');
    };
    jqxToggleButtonComponent.prototype.toggle = function () {
        this.host.jqxToggleButton('toggle');
    };
    jqxToggleButtonComponent.prototype.unCheck = function () {
        this.host.jqxToggleButton('unCheck');
    };
    jqxToggleButtonComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxToggleButton("val", value);
        }
        else {
            return this.host.jqxToggleButton("val");
        }
    };
    ;
    jqxToggleButtonComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
    };
    return jqxToggleButtonComponent;
}()); //jqxToggleButtonComponent
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('imgSrc'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrImgSrc", void 0);
__decorate([
    core_1.Input('imgWidth'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrImgWidth", void 0);
__decorate([
    core_1.Input('imgHeight'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrImgHeight", void 0);
__decorate([
    core_1.Input('imgPosition'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrImgPosition", void 0);
__decorate([
    core_1.Input('roundedCorners'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrRoundedCorners", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('textPosition'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrTextPosition", void 0);
__decorate([
    core_1.Input('textImageRelation'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrTextImageRelation", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('template'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrTemplate", void 0);
__decorate([
    core_1.Input('toggled'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrToggled", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxToggleButtonComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxToggleButtonComponent.prototype, "onClick", void 0);
jqxToggleButtonComponent = __decorate([
    core_1.Component({
        selector: 'jqxToggleButton',
        template: '<button><ng-content></ng-content></button>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxToggleButtonComponent);
exports.jqxToggleButtonComponent = jqxToggleButtonComponent;
var _a;
