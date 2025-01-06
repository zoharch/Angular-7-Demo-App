/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('userData')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=auth.service.js.map