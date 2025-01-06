import * as tslib_1 from "tslib";
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// Services
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';
var StudentDetailsComponent = /** @class */ (function () {
    function StudentDetailsComponent(router, route, studentService, toastr) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.studentService = studentService;
        this.toastr = toastr;
        // Get user detail index number sent in params
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
            if (_this.index && _this.index != null && _this.index !== undefined) {
                _this.getStudentDetails(_this.index);
            }
        });
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
    };
    // Get student details
    StudentDetailsComponent.prototype.getStudentDetails = function (index) {
        var getStudentDetail = this.studentService.getStudentDetails(index);
        if (getStudentDetail) {
            this.studentDetail = getStudentDetail.studentData;
            this.toastr.success(getStudentDetail.message, 'Success');
        }
    };
    StudentDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-student-details',
            templateUrl: './student-details.component.html',
            styleUrls: ['./student-details.component.css'],
            animations: [routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute, StudentService, ToastrService])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());
export { StudentDetailsComponent };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=student-details.component.js.map