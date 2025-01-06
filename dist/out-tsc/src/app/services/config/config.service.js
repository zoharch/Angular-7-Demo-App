/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { trigger, animate, style, transition } from '@angular/animations';
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.apiURL = 'http://localhost/saNG4-Demo-App/api/';
    }
    ConfigService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());
export { ConfigService };
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.checkLimit = function (min, max) {
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    return ValidationService;
}());
export { ValidationService };
export function routerTransition() {
    return slideToLeft();
}
export function slideToLeft() {
    return trigger('routerTransition', [
        transition(':enter', [
            style({ transform: 'translateX(100%)', position: 'fixed', width: '100%' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)', position: 'fixed', width: '100%' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=config.service.js.map