/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { async, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
describe('LoginComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LoginComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */ 
//# sourceMappingURL=login.component.spec.js.map