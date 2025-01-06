/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import * as tslib_1 from "tslib";
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
    UserService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
export { UserService };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */ 
//# sourceMappingURL=user.service.js.map