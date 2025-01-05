/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (value, args) {
        return '+91-' + value;
    };
    PhonePipe = __decorate([
        Pipe({
            name: 'phone'
        })
    ], PhonePipe);
    return PhonePipe;
}());
export { PhonePipe };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */ 
//# sourceMappingURL=phone.pipe.js.map