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
var forms_1 = require("@angular/forms");
var noop = function () { };
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return jqxEditorComponent; }),
    multi: true
};
var jqxEditorComponent = (function () {
    function jqxEditorComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['createCommand', 'disabled', 'editable', 'height', 'lineBreak', 'localization', 'pasteMode', 'rtl', 'stylesheets', 'theme', 'toolbarPosition', 'tools', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxEditorComponent events
        this.onChange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxEditorComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxEditor(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxEditor(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxEditor(this.properties[i])) {
                        this.host.jqxEditor(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxEditorComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxEditorComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxEditorComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxEditor', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
        this.__updateRect__();
    };
    jqxEditorComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxEditorComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxEditorComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxEditorComponent.prototype.setOptions = function (options) {
        this.host.jqxEditor('setOptions', options);
    };
    // jqxEditorComponent properties
    jqxEditorComponent.prototype.createCommand = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('createCommand', arg);
        }
        else {
            return this.host.jqxEditor('createCommand');
        }
    };
    jqxEditorComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('disabled', arg);
        }
        else {
            return this.host.jqxEditor('disabled');
        }
    };
    jqxEditorComponent.prototype.editable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('editable', arg);
        }
        else {
            return this.host.jqxEditor('editable');
        }
    };
    jqxEditorComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('height', arg);
        }
        else {
            return this.host.jqxEditor('height');
        }
    };
    jqxEditorComponent.prototype.lineBreak = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('lineBreak', arg);
        }
        else {
            return this.host.jqxEditor('lineBreak');
        }
    };
    jqxEditorComponent.prototype.localization = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('localization', arg);
        }
        else {
            return this.host.jqxEditor('localization');
        }
    };
    jqxEditorComponent.prototype.pasteMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('pasteMode', arg);
        }
        else {
            return this.host.jqxEditor('pasteMode');
        }
    };
    jqxEditorComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('rtl', arg);
        }
        else {
            return this.host.jqxEditor('rtl');
        }
    };
    jqxEditorComponent.prototype.stylesheets = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('stylesheets', arg);
        }
        else {
            return this.host.jqxEditor('stylesheets');
        }
    };
    jqxEditorComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('theme', arg);
        }
        else {
            return this.host.jqxEditor('theme');
        }
    };
    jqxEditorComponent.prototype.toolbarPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('toolbarPosition', arg);
        }
        else {
            return this.host.jqxEditor('toolbarPosition');
        }
    };
    jqxEditorComponent.prototype.tools = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('tools', arg);
        }
        else {
            return this.host.jqxEditor('tools');
        }
    };
    jqxEditorComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('width', arg);
        }
        else {
            return this.host.jqxEditor('width');
        }
    };
    // jqxEditorComponent functions
    jqxEditorComponent.prototype.destroy = function () {
        this.host.jqxEditor('destroy');
    };
    jqxEditorComponent.prototype.focus = function () {
        this.host.jqxEditor('focus');
    };
    jqxEditorComponent.prototype.print = function () {
        this.host.jqxEditor('print');
    };
    jqxEditorComponent.prototype.setMode = function (mode) {
        this.host.jqxEditor('setMode', mode);
    };
    jqxEditorComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxEditor("val", value);
        }
        else {
            return this.host.jqxEditor("val");
        }
    };
    ;
    jqxEditorComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
    };
    return jqxEditorComponent;
}()); //jqxEditorComponent
__decorate([
    core_1.Input('createCommand'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrCreateCommand", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('editable'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrEditable", void 0);
__decorate([
    core_1.Input('lineBreak'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrLineBreak", void 0);
__decorate([
    core_1.Input('localization'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrLocalization", void 0);
__decorate([
    core_1.Input('pasteMode'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrPasteMode", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('stylesheets'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrStylesheets", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('toolbarPosition'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrToolbarPosition", void 0);
__decorate([
    core_1.Input('tools'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrTools", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxEditorComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "onChange", void 0);
jqxEditorComponent = __decorate([
    core_1.Component({
        selector: 'jqxEditor',
        template: '<div><ng-content></ng-content></div>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxEditorComponent);
exports.jqxEditorComponent = jqxEditorComponent;
var _a;
