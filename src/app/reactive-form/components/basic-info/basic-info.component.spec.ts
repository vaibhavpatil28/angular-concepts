import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoComponent } from './basic-info.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormRoutingModule } from '../../reactive-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('BasicInfoComponent', () => {
  let component: BasicInfoComponent;
  let fixture: ComponentFixture<BasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInfoComponent ],
      imports:[
        CommonModule,
        // ReactiveFormRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate basic info form', () => {
    component.basicInfoForm.patchValue({
      fname:'test',
      email:'email@gmail.com'
    });
    fixture.detectChanges();
    expect(component.validate(component.basicInfoForm).invalidForm.valid).toBeTruthy();
  });
});
