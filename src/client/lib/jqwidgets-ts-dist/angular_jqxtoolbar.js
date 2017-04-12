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
var jqxToolBarComponent = (function () {
    function jqxToolBarComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'initTools', 'minimizeWidth', 'minWidth', 'maxWidth', 'rtl', 'tools', 'theme', 'width'];
        // jqxToolBarComponent events
        this.onClose = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxToolBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxToolBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxToolBar(this.properties[i])) {
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxToolBarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxToolBarComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxToolBarComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToolBar', options);
        this.__updateRect__();
    };
    jqxToolBarComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxToolBarComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxToolBarComponent.prototype.setOptions = function (options) {
        this.host.jqxToolBar('setOptions', options);
    };
    // jqxToolBarComponent properties
    jqxToolBarComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('disabled', arg);
        }
        else {
            return this.host.jqxToolBar('disabled');
        }
    };
    jqxToolBarComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('height', arg);
        }
        else {
            return this.host.jqxToolBar('height');
        }
    };
    jqxToolBarComponent.prototype.initTools = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('initTools', arg);
        }
        else {
            return this.host.jqxToolBar('initTools');
        }
    };
    jqxToolBarComponent.prototype.minimizeWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minimizeWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minimizeWidth');
        }
    };
    jqxToolBarComponent.prototype.minWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minWidth');
        }
    };
    jqxToolBarComponent.prototype.maxWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('maxWidth', arg);
        }
        else {
            return this.host.jqxToolBar('maxWidth');
        }
    };
    jqxToolBarComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('rtl', arg);
        }
        else {
            return this.host.jqxToolBar('rtl');
        }
    };
    jqxToolBarComponent.prototype.tools = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('tools', arg);
        }
        else {
            return this.host.jqxToolBar('tools');
        }
    };
    jqxToolBarComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('theme', arg);
        }
        else {
            return this.host.jqxToolBar('theme');
        }
    };
    jqxToolBarComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('width', arg);
        }
        else {
            return this.host.jqxToolBar('width');
        }
    };
    // jqxToolBarComponent functions
    jqxToolBarComponent.prototype.addTool = function (type, position, separator, menuToolIninitialization) {
        this.host.jqxToolBar('addTool', type, position, separator, menuToolIninitialization);
    };
    jqxToolBarComponent.prototype.disableTool = function (index, disable) {
        this.host.jqxToolBar('disableTool', index, disable);
    };
    jqxToolBarComponent.prototype.destroy = function () {
        this.host.jqxToolBar('destroy');
    };
    jqxToolBarComponent.prototype.destroyTool = function (index) {
        this.host.jqxToolBar('destroyTool', index);
    };
    jqxToolBarComponent.prototype.getTools = function () {
        return this.host.jqxToolBar('getTools');
    };
    jqxToolBarComponent.prototype.render = function () {
        this.host.jqxToolBar('render');
    };
    jqxToolBarComponent.prototype.refresh = function () {
        this.host.jqxToolBar('refresh');
    };
    jqxToolBarComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    return jqxToolBarComponent;
}()); //jqxToolBarComponent
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('initTools'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrInitTools", void 0);
__decorate([
    core_1.Input('minimizeWidth'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrMinimizeWidth", void 0);
__decorate([
    core_1.Input('minWidth'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrMinWidth", void 0);
__decorate([
    core_1.Input('maxWidth'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrMaxWidth", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('tools'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrTools", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxToolBarComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "onOpen", void 0);
jqxToolBarComponent = __decorate([
    core_1.Component({
        selector: 'jqxToolbar',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxToolBarComponent);
exports.jqxToolBarComponent = jqxToolBarComponent;
var _a;
