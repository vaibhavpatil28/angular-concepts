import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-forms-page',
  templateUrl: './nested-forms-page.component.html',
  styleUrls: ['./nested-forms-page.component.scss']
})
export class NestedFormsPageComponent implements OnInit {

  nestedForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.nestedForm = this.fb.group({
      basicInfo: ['']
    });
    this.nestedForm.controls.basicInfo.valueChanges.subscribe(res => {
      console.log('nestedForm valueChanges', res);
    });
    this.nestedForm.controls.basicInfo.patchValue({
      fname: 'test',
      email: 'email@g.com'
    });
    console.log('this.nestedForm.controls.basicInfo', this.nestedForm.controls.basicInfo);

  }
  public onSubmit() {
    console.log("Billing Info", this.nestedForm.value);
  }


}
