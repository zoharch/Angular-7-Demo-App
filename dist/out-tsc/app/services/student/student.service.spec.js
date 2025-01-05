/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { TestBed, inject } from '@angular/core/testing';
import { StudentService } from './student.service';
describe('StudentService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [StudentService]
        });
    });
    it('should be created', inject([StudentService], function (service) {
        expect(service).toBeTruthy();
    }));
});
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
//# sourceMappingURL=student.service.spec.js.map