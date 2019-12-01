import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormsPageComponent } from './nested-forms-page.component';

describe('NestedFormsPageComponent', () => {
  let component: NestedFormsPageComponent;
  let fixture: ComponentFixture<NestedFormsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
