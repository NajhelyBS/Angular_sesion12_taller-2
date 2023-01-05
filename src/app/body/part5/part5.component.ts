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

  //Dando validaciones

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: [Validators.required, Validators.maxLength(10)],
      lastName: [Validators.required, Validators.maxLength(10)],
      email: [Validators.required, Validators.email],
      message: [Validators.required, Validators.maxLength(100)],
   
    });

    this.loadApi()
  }

  //Valores predeterminados con los que se cargará el formulario

  loadApi():any{
    const response = {
      firstName: "Najhely",
      lastName: "Banda",
      email: "nbanda@gmail.com",
      message: "Escribe tu mensaje"
    }

    this.userForm.patchValue(response);

  }

  submitForm() {
    console.log('Formulario enviado con el valor: ', this.userForm.value);
  }
}


