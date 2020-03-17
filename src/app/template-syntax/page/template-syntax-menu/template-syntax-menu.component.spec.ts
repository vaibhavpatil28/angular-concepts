import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntaxMenuComponent } from './template-syntax-menu.component';

describe('TemplateSyntaxMenuComponent', () => {
  let component: TemplateSyntaxMenuComponent;
  let fixture: ComponentFixture<TemplateSyntaxMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSyntaxMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSyntaxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
