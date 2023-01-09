import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrls: ['./part5.component.css']
})


export class Part5Component implements OnInit {

  onFormSubmit() {
    const {value, valid} = this.ContactForm;
    if(valid) {
         console.log(value);
        // do something here.
    }
}

  public ContactForm!: FormGroup;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    
    this.ContactForm = this.formBuilder.group({
      firstName:['',Validators.required],})
  
  
    }

    Values():any{

    }

  send():any{
    alert("Mensaje enviado");
    console.log(this.ContactForm.value);

  }
}