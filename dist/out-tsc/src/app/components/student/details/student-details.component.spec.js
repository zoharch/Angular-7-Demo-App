/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { async, TestBed } from '@angular/core/testing';
import { StudentDetailsComponent } from './student-details.component';
describe('StudentDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StudentDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=student-details.component.spec.js.map