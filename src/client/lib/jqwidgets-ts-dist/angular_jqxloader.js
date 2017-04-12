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
var jqxLoaderComponent = (function () {
    function jqxLoaderComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['autoOpen', 'height', 'html', 'isModal', 'imagePosition', 'rtl', 'text', 'textPosition', 'theme', 'width'];
        // jqxLoaderComponent events
        this.onCreate = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxLoaderComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLoader(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLoader(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLoader(this.properties[i])) {
                        this.host.jqxLoader(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxLoaderComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxLoaderComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxLoaderComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLoader', options);
        this.__updateRect__();
    };
    jqxLoaderComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxLoaderComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxLoaderComponent.prototype.setOptions = function (options) {
        this.host.jqxLoader('setOptions', options);
    };
    // jqxLoaderComponent properties
    jqxLoaderComponent.prototype.autoOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('autoOpen', arg);
        }
        else {
            return this.host.jqxLoader('autoOpen');
        }
    };
    jqxLoaderComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('height', arg);
        }
        else {
            return this.host.jqxLoader('height');
        }
    };
    jqxLoaderComponent.prototype.html = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('html', arg);
        }
        else {
            return this.host.jqxLoader('html');
        }
    };
    jqxLoaderComponent.prototype.isModal = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('isModal', arg);
        }
        else {
            return this.host.jqxLoader('isModal');
        }
    };
    jqxLoaderComponent.prototype.imagePosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('imagePosition', arg);
        }
        else {
            return this.host.jqxLoader('imagePosition');
        }
    };
    jqxLoaderComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('rtl', arg);
        }
        else {
            return this.host.jqxLoader('rtl');
        }
    };
    jqxLoaderComponent.prototype.text = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('text', arg);
        }
        else {
            return this.host.jqxLoader('text');
        }
    };
    jqxLoaderComponent.prototype.textPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('textPosition', arg);
        }
        else {
            return this.host.jqxLoader('textPosition');
        }
    };
    jqxLoaderComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('theme', arg);
        }
        else {
            return this.host.jqxLoader('theme');
        }
    };
    jqxLoaderComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('width', arg);
        }
        else {
            return this.host.jqxLoader('width');
        }
    };
    // jqxLoaderComponent functions
    jqxLoaderComponent.prototype.close = function () {
        this.host.jqxLoader('close');
    };
    jqxLoaderComponent.prototype.open = function () {
        this.host.jqxLoader('open');
    };
    jqxLoaderComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('create', function (eventData) { _this.onCreate.emit(eventData); });
    };
    return jqxLoaderComponent;
}()); //jqxLoaderComponent
__decorate([
    core_1.Input('autoOpen'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrAutoOpen", void 0);
__decorate([
    core_1.Input('html'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrHtml", void 0);
__decorate([
    core_1.Input('isModal'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrIsModal", void 0);
__decorate([
    core_1.Input('imagePosition'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrImagePosition", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('text'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrText", void 0);
__decorate([
    core_1.Input('textPosition'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrTextPosition", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxLoaderComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxLoaderComponent.prototype, "onCreate", void 0);
jqxLoaderComponent = __decorate([
    core_1.Component({
        selector: 'jqxLoader',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxLoaderComponent);
exports.jqxLoaderComponent = jqxLoaderComponent;
var _a;
