/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// Components
import { StudentListComponent } from '../student/list/student-list.component';
import { StudentDetailsComponent } from '../student/details/student-details.component';
import { StudentAddComponent } from '../student/add/student-add.component';
// Services
import { routerTransition } from '../../services/config/config.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, toastr) {
        var _this = this;
        this.router = router;
        this.toastr = toastr;
        // Detect route changes for active sidebar menu
        this.router.events.subscribe(function (val) {
            _this.routeChanged(val);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // Detect route changes for active sidebar menu
    HomeComponent.prototype.routeChanged = function (val) {
        this.active = val.url;
    };
    // Logout User
    HomeComponent.prototype.logOut = function () {
        this.toastr.success('Success', "Logged Out Successfully");
        localStorage.removeItem('userData');
        this.router.navigate(['/login']);
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            animations: [routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [Router, ToastrService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
// Define and export child routes of HomeComponent
export var homeChildRoutes = [
    {
        path: '',
        component: StudentListComponent
    },
    {
        path: 'add',
        component: StudentAddComponent
    },
    {
        path: 'update/:id',
        component: StudentAddComponent
    },
    {
        path: 'detail/:id',
        component: StudentDetailsComponent
    }
];
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=home.component.js.map