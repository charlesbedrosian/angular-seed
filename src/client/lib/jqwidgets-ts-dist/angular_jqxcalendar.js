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
    useExisting: core_1.forwardRef(function () { return jqxCalendarComponent; }),
    multi: true
};
var jqxCalendarComponent = (function () {
    function jqxCalendarComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['backText', 'columnHeaderHeight', 'clearString', 'culture', 'dayNameFormat', 'disabled', 'enableWeekend', 'enableViews', 'enableOtherMonthDays', 'enableFastNavigation', 'enableHover', 'enableAutoNavigation', 'enableTooltips', 'forwardText', 'firstDayOfWeek', 'height', 'min', 'max', 'navigationDelay', 'rowHeaderWidth', 'readOnly', 'restrictedDates', 'rtl', 'stepMonths', 'showWeekNumbers', 'showDayNames', 'showOtherMonthDays', 'showFooter', 'selectionMode', 'specialDates', 'theme', 'titleHeight', 'titleFormat', 'todayString', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxCalendarComponent events
        this.onBackButtonClick = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.onNextButtonClick = new core_1.EventEmitter();
        this.onViewChange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxCalendarComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxCalendar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxCalendar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxCalendar(this.properties[i])) {
                        this.host.jqxCalendar(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxCalendarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxCalendarComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxCalendarComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCalendar', options);
        this.__updateRect__();
    };
    jqxCalendarComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxCalendarComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxCalendarComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxCalendarComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxCalendarComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxCalendarComponent.prototype.setOptions = function (options) {
        this.host.jqxCalendar('setOptions', options);
    };
    // jqxCalendarComponent properties
    jqxCalendarComponent.prototype.backText = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('backText', arg);
        }
        else {
            return this.host.jqxCalendar('backText');
        }
    };
    jqxCalendarComponent.prototype.columnHeaderHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('columnHeaderHeight', arg);
        }
        else {
            return this.host.jqxCalendar('columnHeaderHeight');
        }
    };
    jqxCalendarComponent.prototype.clearString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('clearString', arg);
        }
        else {
            return this.host.jqxCalendar('clearString');
        }
    };
    jqxCalendarComponent.prototype.culture = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('culture', arg);
        }
        else {
            return this.host.jqxCalendar('culture');
        }
    };
    jqxCalendarComponent.prototype.dayNameFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('dayNameFormat', arg);
        }
        else {
            return this.host.jqxCalendar('dayNameFormat');
        }
    };
    jqxCalendarComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('disabled', arg);
        }
        else {
            return this.host.jqxCalendar('disabled');
        }
    };
    jqxCalendarComponent.prototype.enableWeekend = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableWeekend', arg);
        }
        else {
            return this.host.jqxCalendar('enableWeekend');
        }
    };
    jqxCalendarComponent.prototype.enableViews = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableViews', arg);
        }
        else {
            return this.host.jqxCalendar('enableViews');
        }
    };
    jqxCalendarComponent.prototype.enableOtherMonthDays = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('enableOtherMonthDays');
        }
    };
    jqxCalendarComponent.prototype.enableFastNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableFastNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableFastNavigation');
        }
    };
    jqxCalendarComponent.prototype.enableHover = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableHover', arg);
        }
        else {
            return this.host.jqxCalendar('enableHover');
        }
    };
    jqxCalendarComponent.prototype.enableAutoNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableAutoNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableAutoNavigation');
        }
    };
    jqxCalendarComponent.prototype.enableTooltips = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableTooltips', arg);
        }
        else {
            return this.host.jqxCalendar('enableTooltips');
        }
    };
    jqxCalendarComponent.prototype.forwardText = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('forwardText', arg);
        }
        else {
            return this.host.jqxCalendar('forwardText');
        }
    };
    jqxCalendarComponent.prototype.firstDayOfWeek = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxCalendar('firstDayOfWeek');
        }
    };
    jqxCalendarComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('height', arg);
        }
        else {
            return this.host.jqxCalendar('height');
        }
    };
    jqxCalendarComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('min', arg);
        }
        else {
            return this.host.jqxCalendar('min');
        }
    };
    jqxCalendarComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('max', arg);
        }
        else {
            return this.host.jqxCalendar('max');
        }
    };
    jqxCalendarComponent.prototype.navigationDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('navigationDelay', arg);
        }
        else {
            return this.host.jqxCalendar('navigationDelay');
        }
    };
    jqxCalendarComponent.prototype.rowHeaderWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rowHeaderWidth', arg);
        }
        else {
            return this.host.jqxCalendar('rowHeaderWidth');
        }
    };
    jqxCalendarComponent.prototype.readOnly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('readOnly', arg);
        }
        else {
            return this.host.jqxCalendar('readOnly');
        }
    };
    jqxCalendarComponent.prototype.restrictedDates = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('restrictedDates', arg);
        }
        else {
            return this.host.jqxCalendar('restrictedDates');
        }
    };
    jqxCalendarComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rtl', arg);
        }
        else {
            return this.host.jqxCalendar('rtl');
        }
    };
    jqxCalendarComponent.prototype.stepMonths = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('stepMonths', arg);
        }
        else {
            return this.host.jqxCalendar('stepMonths');
        }
    };
    jqxCalendarComponent.prototype.showWeekNumbers = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxCalendar('showWeekNumbers');
        }
    };
    jqxCalendarComponent.prototype.showDayNames = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showDayNames', arg);
        }
        else {
            return this.host.jqxCalendar('showDayNames');
        }
    };
    jqxCalendarComponent.prototype.showOtherMonthDays = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('showOtherMonthDays');
        }
    };
    jqxCalendarComponent.prototype.showFooter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showFooter', arg);
        }
        else {
            return this.host.jqxCalendar('showFooter');
        }
    };
    jqxCalendarComponent.prototype.selectionMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('selectionMode', arg);
        }
        else {
            return this.host.jqxCalendar('selectionMode');
        }
    };
    jqxCalendarComponent.prototype.specialDates = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('specialDates', arg);
        }
        else {
            return this.host.jqxCalendar('specialDates');
        }
    };
    jqxCalendarComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('theme', arg);
        }
        else {
            return this.host.jqxCalendar('theme');
        }
    };
    jqxCalendarComponent.prototype.titleHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleHeight', arg);
        }
        else {
            return this.host.jqxCalendar('titleHeight');
        }
    };
    jqxCalendarComponent.prototype.titleFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleFormat', arg);
        }
        else {
            return this.host.jqxCalendar('titleFormat');
        }
    };
    jqxCalendarComponent.prototype.todayString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('todayString', arg);
        }
        else {
            return this.host.jqxCalendar('todayString');
        }
    };
    jqxCalendarComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('value', arg);
        }
        else {
            return this.host.jqxCalendar('value');
        }
    };
    jqxCalendarComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('width', arg);
        }
        else {
            return this.host.jqxCalendar('width');
        }
    };
    // jqxCalendarComponent functions
    jqxCalendarComponent.prototype.clear = function () {
        this.host.jqxCalendar('clear');
    };
    jqxCalendarComponent.prototype.destroy = function () {
        this.host.jqxCalendar('destroy');
    };
    jqxCalendarComponent.prototype.focus = function () {
        this.host.jqxCalendar('focus');
    };
    jqxCalendarComponent.prototype.addSpecialDate = function (date, tooltip, text) {
        this.host.jqxCalendar('addSpecialDate', date, tooltip, text);
    };
    jqxCalendarComponent.prototype.getMinDate = function () {
        return this.host.jqxCalendar('getMinDate');
    };
    jqxCalendarComponent.prototype.getMaxDate = function () {
        return this.host.jqxCalendar('getMaxDate');
    };
    jqxCalendarComponent.prototype.getDate = function () {
        return this.host.jqxCalendar('getDate');
    };
    jqxCalendarComponent.prototype.getRange = function () {
        return this.host.jqxCalendar('getRange');
    };
    jqxCalendarComponent.prototype.navigateForward = function (months) {
        this.host.jqxCalendar('navigateForward', months);
    };
    jqxCalendarComponent.prototype.navigateBackward = function (months) {
        this.host.jqxCalendar('navigateBackward', months);
    };
    jqxCalendarComponent.prototype.render = function () {
        this.host.jqxCalendar('render');
    };
    jqxCalendarComponent.prototype.refresh = function () {
        this.host.jqxCalendar('refresh');
    };
    jqxCalendarComponent.prototype.setMinDate = function (date) {
        this.host.jqxCalendar('setMinDate', date);
    };
    jqxCalendarComponent.prototype.setMaxDate = function (date) {
        this.host.jqxCalendar('setMaxDate', date);
    };
    jqxCalendarComponent.prototype.setDate = function (date) {
        this.host.jqxCalendar('setDate', date);
    };
    jqxCalendarComponent.prototype.setRange = function (date, date2) {
        this.host.jqxCalendar('setRange', date, date2);
    };
    jqxCalendarComponent.prototype.today = function () {
        this.host.jqxCalendar('today');
    };
    jqxCalendarComponent.prototype.val = function (date, date2) {
        if (value !== undefined) {
            this.host.jqxCalendar("val", date, date2);
        }
        else {
            return this.host.jqxCalendar("val");
        }
    };
    ;
    jqxCalendarComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('backButtonClick', function (eventData) { _this.onBackButtonClick.emit(eventData); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('nextButtonClick', function (eventData) { _this.onNextButtonClick.emit(eventData); });
        this.host.on('viewChange', function (eventData) { _this.onViewChange.emit(eventData); });
    };
    return jqxCalendarComponent;
}()); //jqxCalendarComponent
__decorate([
    core_1.Input('backText'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrBackText", void 0);
__decorate([
    core_1.Input('columnHeaderHeight'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrColumnHeaderHeight", void 0);
__decorate([
    core_1.Input('clearString'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrClearString", void 0);
__decorate([
    core_1.Input('culture'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrCulture", void 0);
__decorate([
    core_1.Input('dayNameFormat'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrDayNameFormat", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('enableWeekend'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrEnableWeekend", void 0);
__decorate([
    core_1.Input('enableViews'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrEnableViews", void 0);
__decorate([
    core_1.Input('enableOtherMonthDays'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrEnableOtherMonthDays", void 0);
__decorate([
    core_1.Input('enableFastNavigation'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrEnableFastNavigation", void 0);
__decorate([
    core_1.Input('enableHover'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrEnableHover", void 0);
__decorate([
    core_1.Input('enableAutoNavigation'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrEnableAutoNavigation", void 0);
__decorate([
    core_1.Input('enableTooltips'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrEnableTooltips", void 0);
__decorate([
    core_1.Input('forwardText'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrForwardText", void 0);
__decorate([
    core_1.Input('firstDayOfWeek'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrFirstDayOfWeek", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrMin", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrMax", void 0);
__decorate([
    core_1.Input('navigationDelay'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrNavigationDelay", void 0);
__decorate([
    core_1.Input('rowHeaderWidth'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrRowHeaderWidth", void 0);
__decorate([
    core_1.Input('readOnly'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrReadOnly", void 0);
__decorate([
    core_1.Input('restrictedDates'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrRestrictedDates", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('stepMonths'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrStepMonths", void 0);
__decorate([
    core_1.Input('showWeekNumbers'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrShowWeekNumbers", void 0);
__decorate([
    core_1.Input('showDayNames'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrShowDayNames", void 0);
__decorate([
    core_1.Input('showOtherMonthDays'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrShowOtherMonthDays", void 0);
__decorate([
    core_1.Input('showFooter'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrShowFooter", void 0);
__decorate([
    core_1.Input('selectionMode'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrSelectionMode", void 0);
__decorate([
    core_1.Input('specialDates'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrSpecialDates", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('titleHeight'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrTitleHeight", void 0);
__decorate([
    core_1.Input('titleFormat'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrTitleFormat", void 0);
__decorate([
    core_1.Input('todayString'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrTodayString", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "onBackButtonClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "onNextButtonClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "onViewChange", void 0);
jqxCalendarComponent = __decorate([
    core_1.Component({
        selector: 'jqxCalendar',
        template: '<div><ng-content></ng-content></div>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxCalendarComponent);
exports.jqxCalendarComponent = jqxCalendarComponent;
var _a;
