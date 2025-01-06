import { HighlightStudentDirective } from "./highlight-student.directive";
import { ElementRef } from "@angular/core";

describe("HighlightStudentDirective", () => {
  it("should create an instance", () => {
    // Mock ElementRef
    const el = {} as ElementRef; // You can mock ElementRef if you don't need to interact with it.

    // Now pass the mocked ElementRef to the directive constructor
    const directive = new HighlightStudentDirective(el);
    expect(directive).toBeTruthy();
  });
});
