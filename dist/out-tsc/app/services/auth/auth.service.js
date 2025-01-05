/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { __decorate, __metadata } from "tslib";
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
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=auth.service.js.map