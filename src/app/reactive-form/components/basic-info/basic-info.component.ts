import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, ControlValueAccessor } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true
    }
  ]

})
export class BasicInfoComponent implements OnInit, ControlValueAccessor, Validators {
  public basicInfoForm: FormGroup = new FormGroup(
    {
      fname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required])
    });

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.basicInfoForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log("on change");
    this.basicInfoForm.valueChanges.subscribe(fn);
    this.basicInfoForm.controls.email.valueChanges.pipe(
      map(value => { return { controlName: 'email', value } })
    ).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.basicInfoForm.disable() : this.basicInfoForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log("Basic Info validation", c);
    return this.basicInfoForm.valid ? null : { invalidForm: { valid: false, message: "basicInfoForm fields are invalid" } };
  }
}
