/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// Services
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';
var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(studentService, toastr) {
        this.studentService = studentService;
        this.toastr = toastr;
    }
    // Call student list function on page load
    StudentListComponent.prototype.ngOnInit = function () {
        this.getStudentList();
    };
    // Get student list from services
    StudentListComponent.prototype.getStudentList = function () {
        var studentList = this.studentService.getAllStudents();
        this.success(studentList);
    };
    // Get student list success
    StudentListComponent.prototype.success = function (data) {
        this.studentListData = data.data;
        for (var i = 0; i < this.studentListData.length; i++) {
            this.studentListData[i].name = this.studentListData[i].first_name + ' ' + this.studentListData[i].last_name;
        }
    };
    // Delete a student with its index
    StudentListComponent.prototype.deleteStudent = function (index) {
        // get confirm box for confirmation
        var r = confirm('Are you sure?');
        if (r === true) {
            var studentDelete = this.studentService.deleteStudent(index);
            if (studentDelete) {
                this.toastr.success('Success', 'Student Deleted');
            }
            this.getStudentList();
        }
    };
    StudentListComponent = __decorate([
        Component({
            selector: 'app-student-list',
            templateUrl: './student-list.component.html',
            styleUrls: ['./student-list.component.css'],
            animations: [routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [StudentService, ToastrService])
    ], StudentListComponent);
    return StudentListComponent;
}());
export { StudentListComponent };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=student-list.component.js.map