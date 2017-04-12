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
var jqxDrawComponent = (function () {
    function jqxDrawComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['renderEngine'];
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxDrawComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDraw(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDraw(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDraw(this.properties[i])) {
                        this.host.jqxDraw(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDrawComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxDrawComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDrawComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.host.append('div');
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDraw', options);
        this.__updateRect__();
    };
    jqxDrawComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDrawComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxDrawComponent.prototype.setOptions = function (options) {
        this.host.jqxDraw('setOptions', options);
    };
    // jqxDrawComponent properties
    jqxDrawComponent.prototype.renderEngine = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDraw('renderEngine', arg);
        }
        else {
            return this.host.jqxDraw('renderEngine');
        }
    };
    // jqxDrawComponent functions
    jqxDrawComponent.prototype.attr = function (element, attributes) {
        this.host.jqxDraw('attr', element, attributes);
    };
    jqxDrawComponent.prototype.circle = function (cx, cy, r, attributes) {
        return this.host.jqxDraw('circle', cx, cy, r, attributes);
    };
    jqxDrawComponent.prototype.clear = function () {
        this.host.jqxDraw('clear');
    };
    jqxDrawComponent.prototype.getAttr = function (element, attributes) {
        return this.host.jqxDraw('getAttr', element, attributes);
    };
    jqxDrawComponent.prototype.getSize = function () {
        return this.host.jqxDraw('getSize');
    };
    jqxDrawComponent.prototype.line = function (x1, y1, x2, y2, attributes) {
        return this.host.jqxDraw('line', x1, y1, x2, y2, attributes);
    };
    jqxDrawComponent.prototype.measureText = function (text, angle, attributes) {
        return this.host.jqxDraw('measureText', text, angle, attributes);
    };
    jqxDrawComponent.prototype.on = function (element, event, func) {
        this.host.jqxDraw('on', element, event, func);
    };
    jqxDrawComponent.prototype.off = function (element, event, func) {
        this.host.jqxDraw('off', element, event, func);
    };
    jqxDrawComponent.prototype.path = function (path, attributes) {
        return this.host.jqxDraw('path', path, attributes);
    };
    jqxDrawComponent.prototype.pieslice = function (cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
        return this.host.jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);
    };
    jqxDrawComponent.prototype.refresh = function () {
        this.host.jqxDraw('refresh');
    };
    jqxDrawComponent.prototype.rect = function (x, y, width, height, attributes) {
        return this.host.jqxDraw('rect', x, y, width, height, attributes);
    };
    jqxDrawComponent.prototype.saveAsJPEG = function (image, url) {
        this.host.jqxDraw('saveAsJPEG', image, url);
    };
    jqxDrawComponent.prototype.saveAsPNG = function (image, url) {
        this.host.jqxDraw('saveAsPNG', image, url);
    };
    jqxDrawComponent.prototype.text = function (text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
        return this.host.jqxDraw('text', text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);
    };
    // jqxDrawComponent events
    jqxDrawComponent.prototype.__wireEvents__ = function () {
    };
    return jqxDrawComponent;
}()); //jqxDrawComponent
__decorate([
    core_1.Input('renderEngine'),
    __metadata("design:type", Object)
], jqxDrawComponent.prototype, "attrRenderEngine", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxDrawComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxDrawComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxDrawComponent.prototype, "autoCreate", void 0);
jqxDrawComponent = __decorate([
    core_1.Component({
        selector: 'jqxDraw',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxDrawComponent);
exports.jqxDrawComponent = jqxDrawComponent;
var _a;
