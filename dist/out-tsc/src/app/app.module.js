import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';
// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';
// Components
import { AppComponent } from './components/index/app.component';
import { StudentListComponent } from './components/student/list/student-list.component';
import { StudentDetailsComponent } from './components/student/details/student-details.component';
import { StudentAddComponent } from './components/student/add/student-add.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HighlightStudentDirective } from './directives/highlight-student.directive';
import { AppRoutingModule } from './app-routing.module';
var AppModule = /** @class */ (function () {
    // enableProdMode();
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                StudentListComponent,
                StudentDetailsComponent,
                StudentAddComponent,
                LoginComponent,
                HomeComponent,
                FilterPipe,
                PhonePipe,
                HighlightStudentDirective
            ],
            imports: [
                BrowserModule,
                RouterModule,
                AppRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                ToastrModule.forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
            ],
            providers: [AuthService, UserService, StudentService],
            bootstrap: [AppComponent]
        })
        // enableProdMode();
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map