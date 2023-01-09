import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrls: ['./part5.component.css']
})


export class Part5Component implements OnInit {

  public ContactForm!: FormGroup;
  
  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.ContactForm = this.formBuilder.group ({
      firstName: ['',Validators.required,Validators.minLength(12)],
      lastName: ['',Validators.required,Validators.minLength(12)],
      email: ['',Validators.required,Validators.email],
      message: ['',Validators.required,Validators.maxLength(350)],

    })

    this.Values();

  }

  Values():any {
    const valores = {
      firstName: 'Najhely',
      lasName: 'Banda',
      email: 'nbanda@gmail.com',
      message: 'Escribe aquí tu comentario...'
    }

    this.ContactForm.patchValue(valores);

  };

  send():any{
    console.log(this.ContactForm.value);

  }
}