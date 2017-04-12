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
var jqxWindowComponent = (function () {
    function jqxWindowComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['autoOpen', 'animationType', 'collapsed', 'collapseAnimationDuration', 'content', 'closeAnimationDuration', 'closeButtonSize', 'closeButtonAction', 'cancelButton', 'dragArea', 'draggable', 'disabled', 'height', 'initContent', 'isModal', 'keyboardCloseKey', 'keyboardNavigation', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'modalOpacity', 'modalZIndex', 'modalBackgroundZIndex', 'okButton', 'position', 'rtl', 'resizable', 'showAnimationDuration', 'showCloseButton', 'showCollapseButton', 'theme', 'title', 'width', 'zIndex'];
        // jqxWindowComponent events
        this.onClose = new core_1.EventEmitter();
        this.onCollapse = new core_1.EventEmitter();
        this.onCreated = new core_1.EventEmitter();
        this.onExpand = new core_1.EventEmitter();
        this.onMoving = new core_1.EventEmitter();
        this.onMoved = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
        this.onResizing = new core_1.EventEmitter();
        this.onResized = new core_1.EventEmitter();
        this.elementRef = containerElement;
        setTimeout(function () {
            if (_this.autoCreate) {
                _this.createComponent();
            }
        });
    }
    jqxWindowComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = void 0;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxWindow(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxWindow(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxWindow(this.properties[i])) {
                        this.host.jqxWindow(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxWindowComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxWindowComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxWindowComponent.prototype.createComponent = function (options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxWindow', options);
        this.__updateRect__();
    };
    jqxWindowComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxWindowComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxWindowComponent.prototype.setOptions = function (options) {
        this.host.jqxWindow('setOptions', options);
    };
    // jqxWindowComponent properties
    jqxWindowComponent.prototype.autoOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('autoOpen', arg);
        }
        else {
            return this.host.jqxWindow('autoOpen');
        }
    };
    jqxWindowComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('animationType', arg);
        }
        else {
            return this.host.jqxWindow('animationType');
        }
    };
    jqxWindowComponent.prototype.collapsed = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapsed', arg);
        }
        else {
            return this.host.jqxWindow('collapsed');
        }
    };
    jqxWindowComponent.prototype.collapseAnimationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('collapseAnimationDuration');
        }
    };
    jqxWindowComponent.prototype.content = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('content', arg);
        }
        else {
            return this.host.jqxWindow('content');
        }
    };
    jqxWindowComponent.prototype.closeAnimationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('closeAnimationDuration');
        }
    };
    jqxWindowComponent.prototype.closeButtonSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonSize', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonSize');
        }
    };
    jqxWindowComponent.prototype.closeButtonAction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonAction', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonAction');
        }
    };
    jqxWindowComponent.prototype.cancelButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('cancelButton', arg);
        }
        else {
            return this.host.jqxWindow('cancelButton');
        }
    };
    jqxWindowComponent.prototype.dragArea = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('dragArea', arg);
        }
        else {
            return this.host.jqxWindow('dragArea');
        }
    };
    jqxWindowComponent.prototype.draggable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('draggable', arg);
        }
        else {
            return this.host.jqxWindow('draggable');
        }
    };
    jqxWindowComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('disabled', arg);
        }
        else {
            return this.host.jqxWindow('disabled');
        }
    };
    jqxWindowComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('height', arg);
        }
        else {
            return this.host.jqxWindow('height');
        }
    };
    jqxWindowComponent.prototype.initContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('initContent', arg);
        }
        else {
            return this.host.jqxWindow('initContent');
        }
    };
    jqxWindowComponent.prototype.isModal = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('isModal', arg);
        }
        else {
            return this.host.jqxWindow('isModal');
        }
    };
    jqxWindowComponent.prototype.keyboardCloseKey = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardCloseKey', arg);
        }
        else {
            return this.host.jqxWindow('keyboardCloseKey');
        }
    };
    jqxWindowComponent.prototype.keyboardNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxWindow('keyboardNavigation');
        }
    };
    jqxWindowComponent.prototype.minHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minHeight', arg);
        }
        else {
            return this.host.jqxWindow('minHeight');
        }
    };
    jqxWindowComponent.prototype.maxHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxHeight', arg);
        }
        else {
            return this.host.jqxWindow('maxHeight');
        }
    };
    jqxWindowComponent.prototype.minWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minWidth', arg);
        }
        else {
            return this.host.jqxWindow('minWidth');
        }
    };
    jqxWindowComponent.prototype.maxWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxWidth', arg);
        }
        else {
            return this.host.jqxWindow('maxWidth');
        }
    };
    jqxWindowComponent.prototype.modalOpacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalOpacity', arg);
        }
        else {
            return this.host.jqxWindow('modalOpacity');
        }
    };
    jqxWindowComponent.prototype.modalZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalZIndex');
        }
    };
    jqxWindowComponent.prototype.modalBackgroundZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalBackgroundZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalBackgroundZIndex');
        }
    };
    jqxWindowComponent.prototype.okButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('okButton', arg);
        }
        else {
            return this.host.jqxWindow('okButton');
        }
    };
    jqxWindowComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('position', arg);
        }
        else {
            return this.host.jqxWindow('position');
        }
    };
    jqxWindowComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('rtl', arg);
        }
        else {
            return this.host.jqxWindow('rtl');
        }
    };
    jqxWindowComponent.prototype.resizable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('resizable', arg);
        }
        else {
            return this.host.jqxWindow('resizable');
        }
    };
    jqxWindowComponent.prototype.showAnimationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('showAnimationDuration');
        }
    };
    jqxWindowComponent.prototype.showCloseButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCloseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCloseButton');
        }
    };
    jqxWindowComponent.prototype.showCollapseButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCollapseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCollapseButton');
        }
    };
    jqxWindowComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('theme', arg);
        }
        else {
            return this.host.jqxWindow('theme');
        }
    };
    jqxWindowComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('title', arg);
        }
        else {
            return this.host.jqxWindow('title');
        }
    };
    jqxWindowComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('width', arg);
        }
        else {
            return this.host.jqxWindow('width');
        }
    };
    jqxWindowComponent.prototype.zIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('zIndex', arg);
        }
        else {
            return this.host.jqxWindow('zIndex');
        }
    };
    // jqxWindowComponent functions
    jqxWindowComponent.prototype.bringToFront = function () {
        this.host.jqxWindow('bringToFront');
    };
    jqxWindowComponent.prototype.close = function () {
        this.host.jqxWindow('close');
    };
    jqxWindowComponent.prototype.collapse = function () {
        this.host.jqxWindow('collapse');
    };
    jqxWindowComponent.prototype.closeAll = function () {
        this.host.jqxWindow('closeAll');
    };
    jqxWindowComponent.prototype.disable = function () {
        this.host.jqxWindow('disable');
    };
    jqxWindowComponent.prototype.destroy = function () {
        this.host.jqxWindow('destroy');
    };
    jqxWindowComponent.prototype.enable = function () {
        this.host.jqxWindow('enable');
    };
    jqxWindowComponent.prototype.expand = function () {
        this.host.jqxWindow('expand');
    };
    jqxWindowComponent.prototype.focus = function () {
        this.host.jqxWindow('focus');
    };
    jqxWindowComponent.prototype.isOpen = function () {
        return this.host.jqxWindow('isOpen');
    };
    jqxWindowComponent.prototype.move = function (top, left) {
        this.host.jqxWindow('move', top, left);
    };
    jqxWindowComponent.prototype.open = function () {
        this.host.jqxWindow('open');
    };
    jqxWindowComponent.prototype.hide = function () {
        this.host.jqxWindow('hide');
    };
    jqxWindowComponent.prototype.resize = function (top, left) {
        this.host.jqxWindow('resize', top, left);
    };
    jqxWindowComponent.prototype.setTitle = function (title) {
        this.host.jqxWindow('setTitle', title);
    };
    jqxWindowComponent.prototype.setContent = function (content) {
        this.host.jqxWindow('setContent', content);
    };
    jqxWindowComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
        this.host.on('created', function (eventData) { _this.onCreated.emit(eventData); });
        this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
        this.host.on('moving', function (eventData) { _this.onMoving.emit(eventData); });
        this.host.on('moved', function (eventData) { _this.onMoved.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('resizing', function (eventData) { _this.onResizing.emit(eventData); });
        this.host.on('resized', function (eventData) { _this.onResized.emit(eventData); });
    };
    return jqxWindowComponent;
}()); //jqxWindowComponent
__decorate([
    core_1.Input('autoOpen'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrAutoOpen", void 0);
__decorate([
    core_1.Input('animationType'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrAnimationType", void 0);
__decorate([
    core_1.Input('collapsed'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrCollapsed", void 0);
__decorate([
    core_1.Input('collapseAnimationDuration'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrCollapseAnimationDuration", void 0);
__decorate([
    core_1.Input('content'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrContent", void 0);
__decorate([
    core_1.Input('closeAnimationDuration'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrCloseAnimationDuration", void 0);
__decorate([
    core_1.Input('closeButtonSize'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrCloseButtonSize", void 0);
__decorate([
    core_1.Input('closeButtonAction'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrCloseButtonAction", void 0);
__decorate([
    core_1.Input('cancelButton'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrCancelButton", void 0);
__decorate([
    core_1.Input('dragArea'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrDragArea", void 0);
__decorate([
    core_1.Input('draggable'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrDraggable", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrDisabled", void 0);
__decorate([
    core_1.Input('initContent'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrInitContent", void 0);
__decorate([
    core_1.Input('isModal'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrIsModal", void 0);
__decorate([
    core_1.Input('keyboardCloseKey'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrKeyboardCloseKey", void 0);
__decorate([
    core_1.Input('keyboardNavigation'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrKeyboardNavigation", void 0);
__decorate([
    core_1.Input('minHeight'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrMinHeight", void 0);
__decorate([
    core_1.Input('maxHeight'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrMaxHeight", void 0);
__decorate([
    core_1.Input('minWidth'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrMinWidth", void 0);
__decorate([
    core_1.Input('maxWidth'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrMaxWidth", void 0);
__decorate([
    core_1.Input('modalOpacity'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrModalOpacity", void 0);
__decorate([
    core_1.Input('modalZIndex'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrModalZIndex", void 0);
__decorate([
    core_1.Input('modalBackgroundZIndex'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrModalBackgroundZIndex", void 0);
__decorate([
    core_1.Input('okButton'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrOkButton", void 0);
__decorate([
    core_1.Input('position'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrPosition", void 0);
__decorate([
    core_1.Input('rtl'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrRtl", void 0);
__decorate([
    core_1.Input('resizable'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrResizable", void 0);
__decorate([
    core_1.Input('showAnimationDuration'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrShowAnimationDuration", void 0);
__decorate([
    core_1.Input('showCloseButton'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrShowCloseButton", void 0);
__decorate([
    core_1.Input('showCollapseButton'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrShowCollapseButton", void 0);
__decorate([
    core_1.Input('theme'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrTheme", void 0);
__decorate([
    core_1.Input('title'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrTitle", void 0);
__decorate([
    core_1.Input('zIndex'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrZIndex", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrWidth", void 0);
__decorate([
    core_1.Input('height'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrHeight", void 0);
__decorate([
    core_1.Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "autoCreate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onCollapse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onCreated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onExpand", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onMoving", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onMoved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onResizing", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onResized", void 0);
jqxWindowComponent = __decorate([
    core_1.Component({
        selector: 'jqxWindow',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], jqxWindowComponent);
exports.jqxWindowComponent = jqxWindowComponent;
var _a;
