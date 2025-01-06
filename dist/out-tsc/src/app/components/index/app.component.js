/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Student Management By Sangwin Gawande';
        // Add few students for initial listing
        this.studentsList = [
            {
                id: 1,
                first_name: "Sangwin",
                last_name: "Gawande",
                email: "sangwin@yopmail.com",
                phone: 9503733178,
                department: "Science"
            },
            {
                id: 2,
                first_name: "Oman",
                last_name: "Umir",
                email: "oman@yopmail.com",
                phone: 8574889658,
                department: "Commerce"
            },
            {
                id: 3,
                first_name: "Tina",
                last_name: "Dillon",
                email: "tina@yopmail.com",
                phone: 7485889658,
                department: "Science"
            },
            {
                id: 4,
                first_name: "John",
                last_name: "Doe",
                email: "john@yopmail.com",
                phone: 9685589748,
                department: "Arts"
            },
            {
                id: 5,
                first_name: "Peter",
                last_name: "Parker",
                email: "peter@yopmail.com",
                phone: 8595856547,
                department: "Engineering"
            }
        ];
        // Save students to localStorage
        localStorage.setItem('students', JSON.stringify(this.studentsList));
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=app.component.js.map