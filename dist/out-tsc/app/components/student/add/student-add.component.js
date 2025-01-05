import { __decorate, __metadata } from "tslib";
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { ValidationService } from '../../../services/config/config.service';
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';
import { ToastrService } from 'ngx-toastr';
var StudentAddComponent = /** @class */ (function () {
    function StudentAddComponent(formBuilder, router, route, studentService, toastr) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.studentService = studentService;
        this.toastr = toastr;
        // Check for route params
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
            // check if ID exists in route & call update or add methods accordingly
            if (_this.index && _this.index !== null && _this.index !== undefined) {
                _this.getStudentDetails(_this.index);
            }
            else {
                _this.createForm(null);
            }
        });
    }
    StudentAddComponent.prototype.ngOnInit = function () {
    };
    // Submit student details form
    StudentAddComponent.prototype.doRegister = function () {
        if (this.index && this.index !== null && this.index !== undefined) {
            this.studentAddForm.value.id = this.index;
        }
        else {
            this.index = null;
        }
        var studentRegister = this.studentService.doRegisterStudent(this.studentAddForm.value, this.index);
        if (studentRegister) {
            if (studentRegister.code === 200) {
                this.toastr.success(studentRegister.message, 'Success');
                this.router.navigate(['/']);
            }
            else {
                this.toastr.error(studentRegister.message, 'Failed');
            }
        }
    };
    // If this is update form, get user details and update form
    StudentAddComponent.prototype.getStudentDetails = function (index) {
        var studentDetail = this.studentService.getStudentDetails(index);
        this.createForm(studentDetail);
    };
    // If this is update request then auto fill form
    StudentAddComponent.prototype.createForm = function (data) {
        if (data === null) {
            this.studentAddForm = this.formBuilder.group({
                first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                phone: ['', [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
                email: ['', [Validators.required, ValidationService.emailValidator]]
            });
        }
        else {
            this.studentAddForm = this.formBuilder.group({
                first_name: [data.studentData.first_name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                last_name: [data.studentData.last_name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                phone: [data.studentData.phone, [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
                email: [data.studentData.email, [Validators.required, ValidationService.emailValidator]]
            });
        }
    };
    StudentAddComponent = __decorate([
        Component({
            selector: 'app-student-add',
            templateUrl: './student-add.component.html',
            styleUrls: ['./student-add.component.css'],
            animations: [routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [FormBuilder, Router, ActivatedRoute, StudentService, ToastrService])
    ], StudentAddComponent);
    return StudentAddComponent;
}());
export { StudentAddComponent };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */ 
//# sourceMappingURL=student-add.component.js.map