/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.doLogin = function (data) {
        if (data.email === "admin@yopmail.com" && data.password === "admin123") {
            return {
                code: 200,
                message: "Login Successful",
                data: data
            };
        }
        else {
            return {
                code: 503,
                message: "Invalid Credentials",
                data: null
            };
        }
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
export { UserService };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */ 
//# sourceMappingURL=user.service.js.map