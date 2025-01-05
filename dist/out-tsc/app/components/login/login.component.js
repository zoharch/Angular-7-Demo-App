/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/config/config.service';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../services/config/config.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, userService, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, ValidationService.emailValidator]],
            password: ['', [Validators.required, ValidationService.passwordValidator]]
        });
    }
    // Check if user already logged in
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userData')) {
            this.router.navigate(['/']);
        }
    };
    // Initicate login
    LoginComponent.prototype.doLogin = function () {
        var login = this.userService.doLogin(this.loginForm.value);
        this.success(login);
    };
    // Login success function
    LoginComponent.prototype.success = function (data) {
        if (data.code === 200) {
            localStorage.setItem('userData', JSON.stringify(data.data));
            this.router.navigate(['/']);
            this.toastr.success('Success', 'Logged In Successfully');
        }
        else {
            this.toastr.error('Failed', 'Invalid Credentials');
        }
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            animations: [routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [FormBuilder, Router, UserService, ToastrService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=login.component.js.map