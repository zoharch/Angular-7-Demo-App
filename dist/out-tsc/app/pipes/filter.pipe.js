import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (args != undefined && args != null && args != '') {
            return value.filter(function (data) { return (data.name.toLowerCase()).indexOf(args.toLowerCase()) > -1; });
        }
        return value;
    };
    FilterPipe = __decorate([
        Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map