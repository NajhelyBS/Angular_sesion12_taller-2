import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrls: ['./part5.component.css']
})
export class Part5Component {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: [, Validators.required, Validators.minLength(10)],
      lastName: [, Validators.required, Validators.minLength(10)],
      email: [, Validators.required, Validators.email]
      
    });
  }

  submitForm() {
    console.log('Form Submitted with value: ', this.userForm.value);
  }
}


