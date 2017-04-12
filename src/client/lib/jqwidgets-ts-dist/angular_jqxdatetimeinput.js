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
    useExisting: core_1.forwardRef(function () { return jqxDateTimeInputComponent; }),
    multi: true
};
var jqxDateTimeInputComponent = (function () {
    function jqxDateTimeInputComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['animationType', 'allowNullDate', 'allowKeyboardDelete', 'clearString', 'culture', 'closeDelay', 'closeCalendarAfterSelection', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'disabled', 'enableBrowserBoundsDetection', 'enableAbsoluteSelection', 'firstDayOfWeek', 'formatString', 'height', 'min', 'max', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'readonly', 'showFooter', 'selectionMode', 'showWeekNumbers', 'showTimeButton', 'showCalendarButton', 'theme', 'template', 'textAlign', 'todayString', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxDateTimeInputComponent events
        this.onChange = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
        this.onTextchanged = new core_1.EventEmitter();
        this.onValueChanged = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxDateTimeInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDateTimeInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDateTimeInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDateTimeInput(this.properties[i])) {
                        this.host.jqxDateTimeInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDateTimeInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxDateTimeInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDateTimeInputComponent.prototype.createComponent = function (options) {
        var _this = this;
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDateTimeInput', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
        this.__updateRect__();
        setTimeout(function () {
            options.value !== undefined ? _this.host.jqxDateTimeInput('val', options.value) : _this.host.jqxDateTimeInput('val', new Date());
        }, 1);
    };
    jqxDateTimeInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDateTimeInputComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxDateTimeInputComponent.prototype, "ngValue", {
        get: function () {
            if (this.widgetObject)
                return this.host.val();
            return '';
        },
        set: function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    jqxDateTimeInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxDateTimeInput('val', value);
        }
    };
    jqxDateTimeInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxDateTimeInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxDateTimeInputComponent.prototype.setOptions = function (options) {
        this.host.jqxDateTimeInput('setOptions', options);
    };
    // jqxDateTimeInputComponent properties
    jqxDateTimeInputComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('animationType', arg);
        }
        else {
            return this.host.jqxDateTimeInput('animationType');
        }
    };
    jqxDateTimeInputComponent.prototype.allowNullDate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowNullDate', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowNullDate');
        }
    };
    jqxDateTimeInputComponent.prototype.allowKeyboardDelete = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowKeyboardDelete', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowKeyboardDelete');
        }
    };
    jqxDateTimeInputComponent.prototype.clearString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('clearString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('clearString');
        }
    };
    jqxDateTimeInputComponent.prototype.culture = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('culture', arg);
        }
        else {
            return this.host.jqxDateTimeInput('culture');
        }
    };
    jqxDateTimeInputComponent.prototype.closeDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeDelay');
        }
    };
    jqxDateTimeInputComponent.prototype.closeCalendarAfterSelection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeCalendarAfterSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeCalendarAfterSelection');
        }
    };
    jqxDateTimeInputComponent.prototype.dropDownHorizontalAlignment = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownHorizontalAlignment');
        }
    };
    jqxDateTimeInputComponent.prototype.dropDownVerticalAlignment = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownVerticalAlignment');
        }
    };
    jqxDateTimeInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('disabled', arg);
        }
        else {
            return this.host.jqxDateTimeInput('disabled');
        }
    };
    jqxDateTimeInputComponent.prototype.enableBrowserBoundsDetection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableBrowserBoundsDetection');
        }
    };
    jqxDateTimeInputComponent.prototype.enableAbsoluteSelection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableAbsoluteSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableAbsoluteSelection');
        }
    };
    jqxDateTimeInputComponent.prototype.firstDayOfWeek = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxDateTimeInput('firstDayOfWeek');
        }
    };
    jqxDateTimeInputComponent.prototype.formatString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('formatString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('formatString');
        }
    };
    jqxDateTimeInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('height', arg);
        }
        else {
            return this.host.jqxDateTimeInput('height');
        }
    };
    jqxDateTimeInputComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('min', arg);
        }
        else {
            return this.host.jqxDateTimeInput('min');
        }
    };
    jqxDateTimeInputComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('max', arg);
        }
        else {
            return this.host.jqxDateTimeInput('max');
        }
    };
    jqxDateTimeInputComponent.prototype.openDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('openDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('openDelay');
        }
    };
    jqxDateTimeInputComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('placeHolder', arg);
        }
        else {
            return this.host.jqxDateTimeInput('placeHolder');
        }
    };
    jqxDateTimeInputComponent.prototype.popupZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxDateTimeInput('popupZIndex');
        }
    };
    jqxDateTimeInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('rtl', arg);
        }
        else {
            return this.host.jqxDateTimeInput('rtl');
        }
    };
    jqxDateTimeInputComponent.prototype.readonly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('readonly', arg);
        }
        else {
            return this.host.jqxDateTimeInput('readonly');
        }
    };
    jqxDateTimeInputComponent.prototype.showFooter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showFooter', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showFooter');
        }
    };
    jqxDateTimeInputComponent.prototype.selectionMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('selectionMode', arg);
        }
        else {
            return this.host.jqxDateTimeInput('selectionMode');
        }
    };
    jqxDateTimeInputComponent.prototype.showWeekNumbers = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showWeekNumbers');
        }
    };
    jqxDateTimeInputComponent.prototype.showTimeButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showTimeButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showTimeButton');
        }
    };
    jqxDateTimeInputComponent.prototype.showCalendarButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showCalendarButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showCalendarButton');
        }
    };
    jqxDateTimeInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('theme', arg);
        }
        else {
            return this.host.jqxDateTimeInput('theme');
        }
    };
    jqxDateTimeInputComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('template', arg);
        }
        else {
            return this.host.jqxDateTimeInput('template');
        }
    };
    jqxDateTimeInputComponent.prototype.textAlign = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('textAlign', arg);
        }
        else {
            return this.host.jqxDateTimeInput('textAlign');
        }
    };
    jqxDateTimeInputComponent.prototype.todayString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('todayString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('todayString');
        }
    };
    jqxDateTimeInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('value', arg);
        }
        else {
            return this.host.jqxDateTimeInput('value');
        }
    };
    jqxDateTimeInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('width', arg);
        }
        else {
            return this.host.jqxDateTimeInput('width');
        }
    };
    // jqxDateTimeInputComponent functions
    jqxDateTimeInputComponent.prototype.close = function () {
        this.host.jqxDateTimeInput('close');
    };
    jqxDateTimeInputComponent.prototype.destroy = function () {
        this.host.jqxDateTimeInput('destroy');
    };
    jqxDateTimeInputComponent.prototype.focus = function () {
        this.host.jqxDateTimeInput('focus');
    };
    jqxDateTimeInputComponent.prototype.getRange = function (date) {
        return this.host.jqxDateTimeInput('getRange', date);
    };
    jqxDateTimeInputComponent.prototype.getText = function () {
        return this.host.jqxDateTimeInput('getText');
    };
    jqxDateTimeInputComponent.prototype.getDate = function () {
        return this.host.jqxDateTimeInput('getDate');
    };
    jqxDateTimeInputComponent.prototype.getMaxDate = function () {
        return this.host.jqxDateTimeInput('getMaxDate');
    };
    jqxDateTimeInputComponent.prototype.getMinDate = function () {
        return this.host.jqxDateTimeInput('getMinDate');
    };
    jqxDateTimeInputComponent.prototype.open = function () {
        this.host.jqxDateTimeInput('open');
    };
    jqxDateTimeInputComponent.prototype.setRange = function (date, date2) {
        this.host.jqxDateTimeInput('setRange', date, date2);
    };
    jqxDateTimeInputComponent.prototype.setMinDate = function (date) {
        this.host.jqxDateTimeInput('setMinDate', date);
    };
    jqxDateTimeInputComponent.prototype.setMaxDate = function (date) {
        this.host.jqxDateTimeInput('setMaxDate', date);
    };
    jqxDateTimeInputComponent.prototype.setDate = function (date) {
        this.host.jqxDateTimeInput('setDate', date);
    };
    jqxDateTimeInputComponent.prototype.val = function (value, value2) {
        if (value !== undefined) {
            this.host.jqxDateTimeInput("val", value, value2);
        }
        else {
            return this.host.jqxDateTimeInput("val");
        }
    };
    ;
    jqxDateTimeInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('textchanged', function (eventData) { _this.onTextchanged.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('keyup', function () { _this.onChangeCallback(_this.host.val()); });
    };
    return jqxDateTimeInputComponent;
}()); //jqxDateTimeInputComponent
__decorate([
    core_1.Input('animationType'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrAnimationType", void 0);
__decorate([
    core_1.Input('allowNullDate'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrAllowNullDate", void 0);
__decorate([
    core_1.Input('allowKeyboardDelete'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrAllowKeyboardDelete", void 0);
__decorate([
    core_1.Input('clearString'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrClearString", void 0);
__decorate([
    core_1.Input('culture'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrCulture", void 0);
__decorate([
    core_1.Input('closeDelay'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrCloseDelay", void 0);
__decorate([
    core_1.Input('closeCalendarAfterSelection'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrCloseCalendarAfterSelection", void 0);
__decorate([
    core_1.Input('dropDownHorizontalAlignment'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
__decorate([
    core_1.Input('dropDownVerticalAlignment'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrDropDownVerticalAlignment", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('enableBrowserBoundsDetection'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
__decorate([
    core_1.Input('enableAbsoluteSelection'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrEnableAbsoluteSelection", void 0);
__decorate([
    core_1.Input('firstDayOfWeek'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrFirstDayOfWeek", void 0);
__decorate([
    core_1.Input('formatString'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrFormatString", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrMin", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrMax", void 0);
__decorate([
    core_1.Input('openDelay'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrOpenDelay", void 0);
__decorate([
    core_1.Input('placeHolder'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    core_1.Input('popupZIndex'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrPopupZIndex", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('readonly'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrReadonly", void 0);
__decorate([
    core_1.Input('showFooter'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrShowFooter", void 0);
__decorate([
    core_1.Input('selectionMode'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrSelectionMode", void 0);
__decorate([
    core_1.Input('showWeekNumbers'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrShowWeekNumbers", void 0);
__decorate([
    core_1.Input('showTimeButton'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrShowTimeButton", void 0);
__decorate([
    core_1.Input('showCalendarButton'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrShowCalendarButton", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('template'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrTemplate", void 0);
__decorate([
    core_1.Input('textAlign'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrTextAlign", void 0);
__decorate([
    core_1.Input('todayString'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrTodayString", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onTextchanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onValueChanged", void 0);
jqxDateTimeInputComponent = __decorate([
    core_1.Component({
        selector: 'jqxDateTimeInput',
        template: '<input [(ngModel)]="ngValue">',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxDateTimeInputComponent);
exports.jqxDateTimeInputComponent = jqxDateTimeInputComponent;
var _a;
