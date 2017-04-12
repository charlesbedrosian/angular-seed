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
var jqxKnobComponent = (function () {
    function jqxKnobComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['allowValueChangeOnClick', 'allowValueChangeOnDrag', 'allowValueChangeOnMouseWheel', 'changing', 'dragEndAngle', 'dragStartAngle', 'disabled', 'dial', 'endAngle', 'height', 'labels', 'marks', 'min', 'max', 'progressBar', 'pointer', 'pointerGrabAction', 'rotation', 'startAngle', 'spinner', 'style', 'step', 'snapToStep', 'value', 'width'];
        // jqxKnobComponent events
        this.onChange = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
        window.onresize = function () {
            _this.__updateRect__();
        };
    }
    jqxKnobComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxKnob(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxKnob(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxKnob(this.properties[i])) {
                        this.host.jqxKnob(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxKnobComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxKnobComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxKnobComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKnob', options);
        this.__updateRect__();
    };
    jqxKnobComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxKnobComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxKnobComponent.prototype.setOptions = function (options) {
        this.host.jqxKnob('setOptions', options);
    };
    // jqxKnobComponent properties
    jqxKnobComponent.prototype.allowValueChangeOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnClick', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnClick');
        }
    };
    jqxKnobComponent.prototype.allowValueChangeOnDrag = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnDrag', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnDrag');
        }
    };
    jqxKnobComponent.prototype.allowValueChangeOnMouseWheel = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnMouseWheel', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnMouseWheel');
        }
    };
    jqxKnobComponent.prototype.changing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('changing', arg);
        }
        else {
            return this.host.jqxKnob('changing');
        }
    };
    jqxKnobComponent.prototype.dragEndAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragEndAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragEndAngle');
        }
    };
    jqxKnobComponent.prototype.dragStartAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragStartAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragStartAngle');
        }
    };
    jqxKnobComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('disabled', arg);
        }
        else {
            return this.host.jqxKnob('disabled');
        }
    };
    jqxKnobComponent.prototype.dial = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dial', arg);
        }
        else {
            return this.host.jqxKnob('dial');
        }
    };
    jqxKnobComponent.prototype.endAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('endAngle', arg);
        }
        else {
            return this.host.jqxKnob('endAngle');
        }
    };
    jqxKnobComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('height', arg);
        }
        else {
            return this.host.jqxKnob('height');
        }
    };
    jqxKnobComponent.prototype.labels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('labels', arg);
        }
        else {
            return this.host.jqxKnob('labels');
        }
    };
    jqxKnobComponent.prototype.marks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('marks', arg);
        }
        else {
            return this.host.jqxKnob('marks');
        }
    };
    jqxKnobComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('min', arg);
        }
        else {
            return this.host.jqxKnob('min');
        }
    };
    jqxKnobComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('max', arg);
        }
        else {
            return this.host.jqxKnob('max');
        }
    };
    jqxKnobComponent.prototype.progressBar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('progressBar', arg);
        }
        else {
            return this.host.jqxKnob('progressBar');
        }
    };
    jqxKnobComponent.prototype.pointer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointer', arg);
        }
        else {
            return this.host.jqxKnob('pointer');
        }
    };
    jqxKnobComponent.prototype.pointerGrabAction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointerGrabAction', arg);
        }
        else {
            return this.host.jqxKnob('pointerGrabAction');
        }
    };
    jqxKnobComponent.prototype.rotation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('rotation', arg);
        }
        else {
            return this.host.jqxKnob('rotation');
        }
    };
    jqxKnobComponent.prototype.startAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('startAngle', arg);
        }
        else {
            return this.host.jqxKnob('startAngle');
        }
    };
    jqxKnobComponent.prototype.spinner = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('spinner', arg);
        }
        else {
            return this.host.jqxKnob('spinner');
        }
    };
    jqxKnobComponent.prototype.style = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('style', arg);
        }
        else {
            return this.host.jqxKnob('style');
        }
    };
    jqxKnobComponent.prototype.step = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('step', arg);
        }
        else {
            return this.host.jqxKnob('step');
        }
    };
    jqxKnobComponent.prototype.snapToStep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('snapToStep', arg);
        }
        else {
            return this.host.jqxKnob('snapToStep');
        }
    };
    jqxKnobComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('value', arg);
        }
        else {
            return this.host.jqxKnob('value');
        }
    };
    jqxKnobComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('width', arg);
        }
        else {
            return this.host.jqxKnob('width');
        }
    };
    // jqxKnobComponent functions
    jqxKnobComponent.prototype.destroy = function () {
        this.host.jqxKnob('destroy');
    };
    jqxKnobComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxKnob("val", value);
        }
        else {
            return this.host.jqxKnob("val");
        }
    };
    ;
    jqxKnobComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    return jqxKnobComponent;
}()); //jqxKnobComponent
__decorate([
    core_1.Input('allowValueChangeOnClick'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrAllowValueChangeOnClick", void 0);
__decorate([
    core_1.Input('allowValueChangeOnDrag'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrAllowValueChangeOnDrag", void 0);
__decorate([
    core_1.Input('allowValueChangeOnMouseWheel'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrAllowValueChangeOnMouseWheel", void 0);
__decorate([
    core_1.Input('changing'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrChanging", void 0);
__decorate([
    core_1.Input('dragEndAngle'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrDragEndAngle", void 0);
__decorate([
    core_1.Input('dragStartAngle'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrDragStartAngle", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('dial'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrDial", void 0);
__decorate([
    core_1.Input('endAngle'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrEndAngle", void 0);
__decorate([
    core_1.Input('labels'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrLabels", void 0);
__decorate([
    core_1.Input('marks'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrMarks", void 0);
__decorate([
    core_1.Input('min'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrMin", void 0);
__decorate([
    core_1.Input('max'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrMax", void 0);
__decorate([
    core_1.Input('progressBar'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrProgressBar", void 0);
__decorate([
    core_1.Input('pointer'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrPointer", void 0);
__decorate([
    core_1.Input('pointerGrabAction'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrPointerGrabAction", void 0);
__decorate([
    core_1.Input('rotation'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrRotation", void 0);
__decorate([
    core_1.Input('startAngle'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrStartAngle", void 0);
__decorate([
    core_1.Input('spinner'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrSpinner", void 0);
__decorate([
    core_1.Input('style'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrStyle", void 0);
__decorate([
    core_1.Input('step'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrStep", void 0);
__decorate([
    core_1.Input('snapToStep'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrSnapToStep", void 0);
__decorate([
    core_1.Input('value'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrValue", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxKnobComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxKnobComponent.prototype, "onChange", void 0);
jqxKnobComponent = __decorate([
    core_1.Component({
        selector: 'jqxKnob',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxKnobComponent);
exports.jqxKnobComponent = jqxKnobComponent;
var _a;
