/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { async, TestBed } from '@angular/core/testing';
import { StudentListComponent } from './student-list.component';
describe('StudentListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StudentListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentListComponent);
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
//# sourceMappingURL=student-list.component.spec.js.map