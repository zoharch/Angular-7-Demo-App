/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var StudentService = /** @class */ (function () {
    function StudentService() {
    }
    // Get all students list via API or any data storage
    StudentService.prototype.getAllStudents = function () {
        var studentList;
        if (localStorage.getItem('students') && localStorage.getItem('students') !== '') {
            studentList = {
                code: 200,
                message: 'Students List Fetched Successfully',
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        else {
            studentList = {
                code: 200,
                message: 'Students List Fetched Successfully',
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        return studentList;
    };
    StudentService.prototype.doRegisterStudent = function (data, index) {
        var studentList = JSON.parse(localStorage.getItem('students'));
        var returnData;
        console.log('index', index);
        if (index != null) {
            for (var i = 0; i < studentList.length; i++) {
                if (index !== i && studentList[i].email === data.email) {
                    returnData = {
                        code: 503,
                        message: 'Email Address Already In Use',
                        data: null
                    };
                    return returnData;
                }
            }
            studentList[index] = data;
            localStorage.setItem('students', JSON.stringify(studentList));
            returnData = {
                code: 200,
                message: 'Student Successfully Updated',
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        else {
            data.id = this.generateRandomID();
            for (var i = 0; i < studentList.length; i++) {
                if (studentList[i].email === data.email) {
                    returnData = {
                        code: 503,
                        message: 'Email Address Already In Use',
                        data: null
                    };
                    return returnData;
                }
            }
            studentList.unshift(data);
            localStorage.setItem('students', JSON.stringify(studentList));
            returnData = {
                code: 200,
                message: 'Student Successfully Added',
                data: JSON.parse(localStorage.getItem('students'))
            };
        }
        return returnData;
    };
    StudentService.prototype.deleteStudent = function (index) {
        var studentList = JSON.parse(localStorage.getItem('students'));
        studentList.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(studentList));
        var returnData = {
            code: 200,
            message: 'Student Successfully Deleted',
            data: JSON.parse(localStorage.getItem('students'))
        };
        return returnData;
    };
    StudentService.prototype.getStudentDetails = function (index) {
        var studentList = JSON.parse(localStorage.getItem('students'));
        var returnData = {
            code: 200,
            message: 'Student Details Fetched',
            studentData: studentList[index]
        };
        return returnData;
    };
    StudentService.prototype.generateRandomID = function () {
        var x = Math.floor((Math.random() * Math.random() * 9999));
        return x;
    };
    StudentService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], StudentService);
    return StudentService;
}());
export { StudentService };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=student.service.js.map