/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
var HighlightStudentDirective = /** @class */ (function () {
    function HighlightStudentDirective(el) {
        this.el = el;
    }
    HighlightStudentDirective.prototype.onMouseEnter = function () {
        this.highlight('gray');
    };
    HighlightStudentDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightStudentDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    tslib_1.__decorate([
        HostListener('mouseenter'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], HighlightStudentDirective.prototype, "onMouseEnter", null);
    tslib_1.__decorate([
        HostListener('mouseleave'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], HighlightStudentDirective.prototype, "onMouseLeave", null);
    HighlightStudentDirective = tslib_1.__decorate([
        Directive({
            selector: '[appHighlightStudent]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], HighlightStudentDirective);
    return HighlightStudentDirective;
}());
export { HighlightStudentDirective };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=highlight-student.directive.js.map