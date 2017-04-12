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
    useExisting: core_1.forwardRef(function () { return jqxTextAreaComponent; }),
    multi: true
};
var jqxTextAreaComponent = (function () {
    function jqxTextAreaComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['disabled', 'displayMember', 'dropDownWidth', 'height', 'items', 'maxLength', 'minLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'roundedCorners', 'rtl', 'scrollBarSize', 'searchMode', 'source', 'theme', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxTextAreaComponent events
        this.onChange = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxTextAreaComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTextArea(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTextArea(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTextArea(this.properties[i])) {
                        this.host.jqxTextArea(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxTextAreaComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxTextAreaComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxTextAreaComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTextArea', options);
        this.__updateRect__();
    };
    jqxTextAreaComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxTextAreaComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxTextAreaComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
        }
    };
    jqxTextAreaComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxTextAreaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxTextAreaComponent.prototype.setOptions = function (options) {
        this.host.jqxTextArea('setOptions', options);
    };
    // jqxTextAreaComponent properties
    jqxTextAreaComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('disabled', arg);
        }
        else {
            return this.host.jqxTextArea('disabled');
        }
    };
    jqxTextAreaComponent.prototype.displayMember = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('displayMember', arg);
        }
        else {
            return this.host.jqxTextArea('displayMember');
        }
    };
    jqxTextAreaComponent.prototype.dropDownWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('dropDownWidth', arg);
        }
        else {
            return this.host.jqxTextArea('dropDownWidth');
        }
    };
    jqxTextAreaComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('height', arg);
        }
        else {
            return this.host.jqxTextArea('height');
        }
    };
    jqxTextAreaComponent.prototype.items = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('items', arg);
        }
        else {
            return this.host.jqxTextArea('items');
        }
    };
    jqxTextAreaComponent.prototype.maxLength = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('maxLength', arg);
        }
        else {
            return this.host.jqxTextArea('maxLength');
        }
    };
    jqxTextAreaComponent.prototype.minLength = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('minLength', arg);
        }
        else {
            return this.host.jqxTextArea('minLength');
        }
    };
    jqxTextAreaComponent.prototype.opened = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('opened', arg);
        }
        else {
            return this.host.jqxTextArea('opened');
        }
    };
    jqxTextAreaComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('placeHolder', arg);
        }
        else {
            return this.host.jqxTextArea('placeHolder');
        }
    };
    jqxTextAreaComponent.prototype.popupZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('popupZIndex', arg);
        }
        else {
            return this.host.jqxTextArea('popupZIndex');
        }
    };
    jqxTextAreaComponent.prototype.query = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('query', arg);
        }
        else {
            return this.host.jqxTextArea('query');
        }
    };
    jqxTextAreaComponent.prototype.renderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('renderer', arg);
        }
        else {
            return this.host.jqxTextArea('renderer');
        }
    };
    jqxTextAreaComponent.prototype.roundedCorners = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('roundedCorners', arg);
        }
        else {
            return this.host.jqxTextArea('roundedCorners');
        }
    };
    jqxTextAreaComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('rtl', arg);
        }
        else {
            return this.host.jqxTextArea('rtl');
        }
    };
    jqxTextAreaComponent.prototype.scrollBarSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('scrollBarSize', arg);
        }
        else {
            return this.host.jqxTextArea('scrollBarSize');
        }
    };
    jqxTextAreaComponent.prototype.searchMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('searchMode', arg);
        }
        else {
            return this.host.jqxTextArea('searchMode');
        }
    };
    jqxTextAreaComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('source', arg);
        }
        else {
            return this.host.jqxTextArea('source');
        }
    };
    jqxTextAreaComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('theme', arg);
        }
        else {
            return this.host.jqxTextArea('theme');
        }
    };
    jqxTextAreaComponent.prototype.valueMember = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('valueMember', arg);
        }
        else {
            return this.host.jqxTextArea('valueMember');
        }
    };
    jqxTextAreaComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('width', arg);
        }
        else {
            return this.host.jqxTextArea('width');
        }
    };
    // jqxTextAreaComponent functions
    jqxTextAreaComponent.prototype.destroy = function () {
        this.host.jqxTextArea('destroy');
    };
    jqxTextAreaComponent.prototype.focus = function () {
        this.host.jqxTextArea('focus');
    };
    jqxTextAreaComponent.prototype.refresh = function () {
        this.host.jqxTextArea('refresh');
    };
    jqxTextAreaComponent.prototype.render = function () {
        this.host.jqxTextArea('render');
    };
    jqxTextAreaComponent.prototype.selectAll = function () {
        this.host.jqxTextArea('selectAll');
    };
    jqxTextAreaComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxTextArea("val", value);
        }
        else {
            return this.host.jqxTextArea("val");
        }
    };
    ;
    jqxTextAreaComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('keyup', function () { _this.onChangeCallback(_this.host.val()); });
    };
    return jqxTextAreaComponent;
}()); //jqxTextAreaComponent
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('displayMember'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrDisplayMember", void 0);
__decorate([
    core_1.Input('dropDownWidth'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrDropDownWidth", void 0);
__decorate([
    core_1.Input('items'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrItems", void 0);
__decorate([
    core_1.Input('maxLength'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrMaxLength", void 0);
__decorate([
    core_1.Input('minLength'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrMinLength", void 0);
__decorate([
    core_1.Input('opened'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrOpened", void 0);
__decorate([
    core_1.Input('placeHolder'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    core_1.Input('popupZIndex'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrPopupZIndex", void 0);
__decorate([
    core_1.Input('query'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrQuery", void 0);
__decorate([
    core_1.Input('renderer'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrRenderer", void 0);
__decorate([
    core_1.Input('roundedCorners'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrRoundedCorners", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('scrollBarSize'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrScrollBarSize", void 0);
__decorate([
    core_1.Input('searchMode'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrSearchMode", void 0);
__decorate([
    core_1.Input('source'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrSource", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('valueMember'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrValueMember", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxTextAreaComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "onOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTextAreaComponent.prototype, "onSelect", void 0);
jqxTextAreaComponent = __decorate([
    core_1.Component({
        selector: 'jqxTextArea',
        template: '<div><ng-content></ng-content></div>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxTextAreaComponent);
exports.jqxTextAreaComponent = jqxTextAreaComponent;
var _a;
