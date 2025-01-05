/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { __decorate, __metadata } from "tslib";
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
    __decorate([
        HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightStudentDirective.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightStudentDirective.prototype, "onMouseLeave", null);
    HighlightStudentDirective = __decorate([
        Directive({
            selector: '[appHighlightStudent]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], HighlightStudentDirective);
    return HighlightStudentDirective;
}());
export { HighlightStudentDirective };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=highlight-student.directive.js.map