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
var jqxTreeComponent = (function () {
    function jqxTreeComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'allowDrag', 'allowDrop', 'checkboxes', 'dragStart', 'dragEnd', 'disabled', 'easing', 'enableHover', 'height', 'hasThreeStates', 'incrementalSearch', 'keyboardNavigation', 'rtl', 'source', 'toggleIndicatorSize', 'toggleMode', 'theme', 'width'];
        // jqxTreeComponent events
        this.onAdded = new core_1.EventEmitter();
        this.onCheckChange = new core_1.EventEmitter();
        this.onCollapse = new core_1.EventEmitter();
        this.onDragStart = new core_1.EventEmitter();
        this.onDragEnd = new core_1.EventEmitter();
        this.onExpand = new core_1.EventEmitter();
        this.onInitialized = new core_1.EventEmitter();
        this.onItemClick = new core_1.EventEmitter();
        this.onRemoved = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxTreeComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTree(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTree(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTree(this.properties[i])) {
                        this.host.jqxTree(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxTreeComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxTreeComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxTreeComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
        this.__updateRect__();
    };
    jqxTreeComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxTreeComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxTreeComponent.prototype.setOptions = function (options) {
        this.host.jqxTree('setOptions', options);
    };
    // jqxTreeComponent properties
    jqxTreeComponent.prototype.animationShowDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationShowDuration', arg);
        }
        else {
            return this.host.jqxTree('animationShowDuration');
        }
    };
    jqxTreeComponent.prototype.animationHideDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationHideDuration', arg);
        }
        else {
            return this.host.jqxTree('animationHideDuration');
        }
    };
    jqxTreeComponent.prototype.allowDrag = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrag', arg);
        }
        else {
            return this.host.jqxTree('allowDrag');
        }
    };
    jqxTreeComponent.prototype.allowDrop = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrop', arg);
        }
        else {
            return this.host.jqxTree('allowDrop');
        }
    };
    jqxTreeComponent.prototype.checkboxes = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('checkboxes', arg);
        }
        else {
            return this.host.jqxTree('checkboxes');
        }
    };
    jqxTreeComponent.prototype.dragStart = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragStart', arg);
        }
        else {
            return this.host.jqxTree('dragStart');
        }
    };
    jqxTreeComponent.prototype.dragEnd = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragEnd', arg);
        }
        else {
            return this.host.jqxTree('dragEnd');
        }
    };
    jqxTreeComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('disabled', arg);
        }
        else {
            return this.host.jqxTree('disabled');
        }
    };
    jqxTreeComponent.prototype.easing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('easing', arg);
        }
        else {
            return this.host.jqxTree('easing');
        }
    };
    jqxTreeComponent.prototype.enableHover = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('enableHover', arg);
        }
        else {
            return this.host.jqxTree('enableHover');
        }
    };
    jqxTreeComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('height', arg);
        }
        else {
            return this.host.jqxTree('height');
        }
    };
    jqxTreeComponent.prototype.hasThreeStates = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('hasThreeStates', arg);
        }
        else {
            return this.host.jqxTree('hasThreeStates');
        }
    };
    jqxTreeComponent.prototype.incrementalSearch = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTree('incrementalSearch');
        }
    };
    jqxTreeComponent.prototype.keyboardNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTree('keyboardNavigation');
        }
    };
    jqxTreeComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('rtl', arg);
        }
        else {
            return this.host.jqxTree('rtl');
        }
    };
    jqxTreeComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('source', arg);
        }
        else {
            return this.host.jqxTree('source');
        }
    };
    jqxTreeComponent.prototype.toggleIndicatorSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleIndicatorSize', arg);
        }
        else {
            return this.host.jqxTree('toggleIndicatorSize');
        }
    };
    jqxTreeComponent.prototype.toggleMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleMode', arg);
        }
        else {
            return this.host.jqxTree('toggleMode');
        }
    };
    jqxTreeComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('theme', arg);
        }
        else {
            return this.host.jqxTree('theme');
        }
    };
    jqxTreeComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTree('width', arg);
        }
        else {
            return this.host.jqxTree('width');
        }
    };
    // jqxTreeComponent functions
    jqxTreeComponent.prototype.addBefore = function (item, id) {
        this.host.jqxTree('addBefore', item, id);
    };
    jqxTreeComponent.prototype.addAfter = function (item, id) {
        this.host.jqxTree('addAfter', item, id);
    };
    jqxTreeComponent.prototype.addTo = function (item, id) {
        this.host.jqxTree('addTo', item, id);
    };
    jqxTreeComponent.prototype.clear = function () {
        this.host.jqxTree('clear');
    };
    jqxTreeComponent.prototype.checkAll = function () {
        this.host.jqxTree('checkAll');
    };
    jqxTreeComponent.prototype.checkItem = function (item, checked) {
        this.host.jqxTree('checkItem', item, checked);
    };
    jqxTreeComponent.prototype.collapseAll = function () {
        this.host.jqxTree('collapseAll');
    };
    jqxTreeComponent.prototype.collapseItem = function (item) {
        this.host.jqxTree('collapseItem', item);
    };
    jqxTreeComponent.prototype.destroy = function () {
        this.host.jqxTree('destroy');
    };
    jqxTreeComponent.prototype.disableItem = function (item) {
        this.host.jqxTree('disableItem', item);
    };
    jqxTreeComponent.prototype.ensureVisible = function (item) {
        this.host.jqxTree('ensureVisible', item);
    };
    jqxTreeComponent.prototype.enableItem = function (item) {
        this.host.jqxTree('enableItem', item);
    };
    jqxTreeComponent.prototype.expandAll = function () {
        this.host.jqxTree('expandAll');
    };
    jqxTreeComponent.prototype.expandItem = function (item) {
        this.host.jqxTree('expandItem', item);
    };
    jqxTreeComponent.prototype.focus = function () {
        this.host.jqxTree('focus');
    };
    jqxTreeComponent.prototype.getCheckedItems = function () {
        return this.host.jqxTree('getCheckedItems');
    };
    jqxTreeComponent.prototype.getUncheckedItems = function () {
        return this.host.jqxTree('getUncheckedItems');
    };
    jqxTreeComponent.prototype.getItems = function () {
        return this.host.jqxTree('getItems');
    };
    jqxTreeComponent.prototype.getItem = function (element) {
        return this.host.jqxTree('getItem', element);
    };
    jqxTreeComponent.prototype.getSelectedItem = function () {
        return this.host.jqxTree('getSelectedItem');
    };
    jqxTreeComponent.prototype.getPrevItem = function () {
        return this.host.jqxTree('getPrevItem');
    };
    jqxTreeComponent.prototype.getNextItem = function () {
        return this.host.jqxTree('getNextItem');
    };
    jqxTreeComponent.prototype.hitTest = function (left, top) {
        return this.host.jqxTree('hitTest', left, top);
    };
    jqxTreeComponent.prototype.removeItem = function (item) {
        this.host.jqxTree('removeItem', item);
    };
    jqxTreeComponent.prototype.render = function () {
        this.host.jqxTree('render');
    };
    jqxTreeComponent.prototype.refresh = function () {
        this.host.jqxTree('refresh');
    };
    jqxTreeComponent.prototype.selectItem = function (item) {
        this.host.jqxTree('selectItem', item);
    };
    jqxTreeComponent.prototype.uncheckAll = function () {
        this.host.jqxTree('uncheckAll');
    };
    jqxTreeComponent.prototype.uncheckItem = function (item) {
        this.host.jqxTree('uncheckItem', item);
    };
    jqxTreeComponent.prototype.updateItem = function (item, newItem) {
        this.host.jqxTree('updateItem', item, newItem);
    };
    jqxTreeComponent.prototype.val = function (value) {
        if (value !== undefined) {
            this.host.jqxTree("val", value);
        }
        else {
            return this.host.jqxTree("val");
        }
    };
    ;
    jqxTreeComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('added', function (eventData) { _this.onAdded.emit(eventData); });
        this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
        this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
        this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
        this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
        this.host.on('initialized', function (eventData) { _this.onInitialized.emit(eventData); });
        this.host.on('itemClick', function (eventData) { _this.onItemClick.emit(eventData); });
        this.host.on('removed', function (eventData) { _this.onRemoved.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
    };
    return jqxTreeComponent;
}()); //jqxTreeComponent
__decorate([
    core_1.Input('animationShowDuration'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrAnimationShowDuration", void 0);
__decorate([
    core_1.Input('animationHideDuration'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrAnimationHideDuration", void 0);
__decorate([
    core_1.Input('allowDrag'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrAllowDrag", void 0);
__decorate([
    core_1.Input('allowDrop'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrAllowDrop", void 0);
__decorate([
    core_1.Input('checkboxes'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrCheckboxes", void 0);
__decorate([
    core_1.Input('dragStart'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrDragStart", void 0);
__decorate([
    core_1.Input('dragEnd'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrDragEnd", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('easing'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrEasing", void 0);
__decorate([
    core_1.Input('enableHover'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrEnableHover", void 0);
__decorate([
    core_1.Input('hasThreeStates'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrHasThreeStates", void 0);
__decorate([
    core_1.Input('incrementalSearch'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrIncrementalSearch", void 0);
__decorate([
    core_1.Input('keyboardNavigation'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrKeyboardNavigation", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('source'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrSource", void 0);
__decorate([
    core_1.Input('toggleIndicatorSize'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrToggleIndicatorSize", void 0);
__decorate([
    core_1.Input('toggleMode'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrToggleMode", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onAdded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onCheckChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onCollapse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onDragStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onDragEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onExpand", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onInitialized", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onItemClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onRemoved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxTreeComponent.prototype, "onSelect", void 0);
jqxTreeComponent = __decorate([
    core_1.Component({
        selector: 'jqxTree',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxTreeComponent);
exports.jqxTreeComponent = jqxTreeComponent;
var _a;
