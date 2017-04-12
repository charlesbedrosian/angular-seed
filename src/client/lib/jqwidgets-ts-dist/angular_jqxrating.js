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
    useExisting: core_1.forwardRef(function () { return jqxRatingComponent; }),
    multi: true
};
var jqxRatingComponent = (function () {
    function jqxRatingComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['count', 'disabled', 'height', 'itemHeight', 'itemWidth', 'precision', 'singleVote', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxRatingComponent events
        this.onChange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxRatingComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRating(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRating(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRating(this.properties[i])) {
                        this.host.jqxRating(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxRatingComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxRatingComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxRatingComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRating', options);
        this.__updateRect__();
    };
    jqxRatingComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxRatingComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxRatingComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxRatingComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxRatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxRatingComponent.prototype.setOptions = function (options) {
        this.host.jqxRating('setOptions', options);
    };
    // jqxRatingComponent properties
    jqxRatingComponent.prototype.count = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('count', arg);
        }
        else {
            return this.host.jqxRating('count');
        }
    };
    jqxRatingComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('disabled', arg);
        }
        else {
            return this.host.jqxRating('disabled');
        }
    };
    jqxRatingComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('height', arg);
        }
        else {
            return this.host.jqxRating('height');
        }
    };
    jqxRatingComponent.prototype.itemHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('itemHeight', arg);
        }
        else {
            return this.host.jqxRating('itemHeight');
        }
    };
    jqxRatingComponent.prototype.itemWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('itemWidth', arg);
        }
        else {
            return this.host.jqxRating('itemWidth');
        }
    };
    jqxRatingComponent.prototype.precision = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('precision', arg);
        }
        else {
            return this.host.jqxRating('precision');
        }
    };
    jqxRatingComponent.prototype.singleVote = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('singleVote', arg);
        }
        else {
            return this.host.jqxRating('singleVote');
        }
    };
    jqxRatingComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('value', arg);
        }
        else {
            return this.host.jqxRating('value');
        }
    };
    jqxRatingComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRating('width', arg);
        }
        else {
            return this.host.jqxRating('width');
        }
    };
    // jqxRatingComponent functions
    jqxRatingComponent.prototype.disable = function () {
        this.host.jqxRating('disable');
    };
    jqxRatingComponent.prototype.enable = function () {
        this.host.jqxRating('enable');
    };
    jqxRatingComponent.prototype.getValue = function () {
        return this.host.jqxRating('getValue');
    };
    jqxRatingComponent.prototype.setValue = function (value) {
        this.host.jqxRating('setValue', value);
    };
    jqxRatingComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxRating("val", value);
        }
        else {
            return this.host.jqxRating("val");
        }
    };
    ;
    jqxRatingComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
    };
    return jqxRatingComponent;
}()); //jqxRatingComponent
__decorate([
    core_1.Input('count'),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "attrCount", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('itemHeight'),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "attrItemHeight", void 0);
__decorate([
    core_1.Input('itemWidth'),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "attrItemWidth", void 0);
__decorate([
    core_1.Input('precision'),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "attrPrecision", void 0);
__decorate([
    core_1.Input('singleVote'),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "attrSingleVote", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxRatingComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxRatingComponent.prototype, "onChange", void 0);
jqxRatingComponent = __decorate([
    core_1.Component({
        selector: 'jqxRating',
        template: '<div><ng-content></ng-content></div>',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxRatingComponent);
exports.jqxRatingComponent = jqxRatingComponent;
var _a;
