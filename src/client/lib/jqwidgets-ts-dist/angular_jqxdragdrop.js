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
var jqxDragDropComponent = (function () {
    function jqxDragDropComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['appendTo', 'disabled', 'distance', 'data', 'dropAction', 'dropTarget', 'dragZIndex', 'feedback', 'initFeedback', 'opacity', 'onDragEnd', 'onDrag', 'onDragStart', 'onTargetDrop', 'onDropTargetEnter', 'onDropTargetLeave', 'restricter', 'revert', 'revertDuration', 'tolerance'];
        // jqxDragDropComponent functions
        // jqxDragDropComponent events
        this.ondragstart = new core_1.EventEmitter();
        this.ondragend = new core_1.EventEmitter();
        this.ondragging = new core_1.EventEmitter();
        this.ondroptargetenter = new core_1.EventEmitter();
        this.ondroptargetleave = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxDragDropComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDragDrop(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDragDrop(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDragDrop(this.properties[i])) {
                        this.host.jqxDragDrop(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDragDropComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxDragDropComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDragDropComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDragDrop', options);
        this.__updateRect__();
    };
    jqxDragDropComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDragDropComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxDragDropComponent.prototype.setOptions = function (options) {
        this.host.jqxDragDrop('setOptions', options);
    };
    // jqxDragDropComponent properties
    jqxDragDropComponent.prototype.appendTo = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('appendTo', arg);
        }
        else {
            return this.host.jqxDragDrop('appendTo');
        }
    };
    jqxDragDropComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('disabled', arg);
        }
        else {
            return this.host.jqxDragDrop('disabled');
        }
    };
    jqxDragDropComponent.prototype.distance = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('distance', arg);
        }
        else {
            return this.host.jqxDragDrop('distance');
        }
    };
    jqxDragDropComponent.prototype.data = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('data', arg);
        }
        else {
            return this.host.jqxDragDrop('data');
        }
    };
    jqxDragDropComponent.prototype.dropAction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropAction', arg);
        }
        else {
            return this.host.jqxDragDrop('dropAction');
        }
    };
    jqxDragDropComponent.prototype.dropTarget = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropTarget', arg);
        }
        else {
            return this.host.jqxDragDrop('dropTarget');
        }
    };
    jqxDragDropComponent.prototype.dragZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dragZIndex', arg);
        }
        else {
            return this.host.jqxDragDrop('dragZIndex');
        }
    };
    jqxDragDropComponent.prototype.feedback = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('feedback', arg);
        }
        else {
            return this.host.jqxDragDrop('feedback');
        }
    };
    jqxDragDropComponent.prototype.initFeedback = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('initFeedback', arg);
        }
        else {
            return this.host.jqxDragDrop('initFeedback');
        }
    };
    jqxDragDropComponent.prototype.opacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('opacity', arg);
        }
        else {
            return this.host.jqxDragDrop('opacity');
        }
    };
    jqxDragDropComponent.prototype.onDragEnd = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragEnd', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragEnd');
        }
    };
    jqxDragDropComponent.prototype.onDrag = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDrag', arg);
        }
        else {
            return this.host.jqxDragDrop('onDrag');
        }
    };
    jqxDragDropComponent.prototype.onDragStart = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragStart', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragStart');
        }
    };
    jqxDragDropComponent.prototype.onTargetDrop = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onTargetDrop', arg);
        }
        else {
            return this.host.jqxDragDrop('onTargetDrop');
        }
    };
    jqxDragDropComponent.prototype.onDropTargetEnter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetEnter', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetEnter');
        }
    };
    jqxDragDropComponent.prototype.onDropTargetLeave = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetLeave', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetLeave');
        }
    };
    jqxDragDropComponent.prototype.restricter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('restricter', arg);
        }
        else {
            return this.host.jqxDragDrop('restricter');
        }
    };
    jqxDragDropComponent.prototype.revert = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revert', arg);
        }
        else {
            return this.host.jqxDragDrop('revert');
        }
    };
    jqxDragDropComponent.prototype.revertDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revertDuration', arg);
        }
        else {
            return this.host.jqxDragDrop('revertDuration');
        }
    };
    jqxDragDropComponent.prototype.tolerance = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('tolerance', arg);
        }
        else {
            return this.host.jqxDragDrop('tolerance');
        }
    };
    jqxDragDropComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('dragStart', function (eventData) { _this.ondragstart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.ondragend.emit(eventData); });
        this.host.on('dragging', function (eventData) { _this.ondragging.emit(eventData); });
        this.host.on('dropTargetEnter', function (eventData) { _this.ondroptargetenter.emit(eventData); });
        this.host.on('dropTargetLeave', function (eventData) { _this.ondroptargetleave.emit(eventData); });
    };
    return jqxDragDropComponent;
}()); //jqxDragDropComponent
__decorate([
    core_1.Input('appendTo'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrAppendTo", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('distance'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrDistance", void 0);
__decorate([
    core_1.Input('data'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrData", void 0);
__decorate([
    core_1.Input('dropAction'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrDropAction", void 0);
__decorate([
    core_1.Input('dropTarget'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrDropTarget", void 0);
__decorate([
    core_1.Input('dragZIndex'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrDragZIndex", void 0);
__decorate([
    core_1.Input('feedback'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrFeedback", void 0);
__decorate([
    core_1.Input('initFeedback'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrInitFeedback", void 0);
__decorate([
    core_1.Input('opacity'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrOpacity", void 0);
__decorate([
    core_1.Input('onDragEnd'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrOnDragEnd", void 0);
__decorate([
    core_1.Input('onDrag'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrOnDrag", void 0);
__decorate([
    core_1.Input('onDragStart'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrOnDragStart", void 0);
__decorate([
    core_1.Input('onTargetDrop'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrOnTargetDrop", void 0);
__decorate([
    core_1.Input('onDropTargetEnter'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrOnDropTargetEnter", void 0);
__decorate([
    core_1.Input('onDropTargetLeave'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrOnDropTargetLeave", void 0);
__decorate([
    core_1.Input('restricter'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrRestricter", void 0);
__decorate([
    core_1.Input('revert'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrRevert", void 0);
__decorate([
    core_1.Input('revertDuration'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrRevertDuration", void 0);
__decorate([
    core_1.Input('tolerance'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrTolerance", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxDragDropComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondragstart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondragend", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondragging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondroptargetenter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondroptargetleave", void 0);
jqxDragDropComponent = __decorate([
    core_1.Component({
        selector: 'jqxDragDrop',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxDragDropComponent);
exports.jqxDragDropComponent = jqxDragDropComponent;
var _a;
