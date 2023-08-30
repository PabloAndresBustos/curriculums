import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  mensajeError: string = "";

  constructor(private fb: FormBuilder, private router: Router, private userService: UsuarioService) { }

  ngOnInit(): void { }


  //* Getters para validar los campos del formulario
  get name() {
    return this.registroForm.controls.name;
  }

  get lastName() {
    return this.registroForm.controls.lastName;
  }

  get email() {
    return this.registroForm.controls.email;
  }

  get nick() {
    return this.registroForm.controls.nick;
  }

  get password() {  
    return this.registroForm.controls.password;
  }


  //* Formulario 
  registroForm = this.fb.group({
    name: ['', [ Validators.required ]],
    lastName: ['', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.email ]],
    nick: ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  })
  

  //* Metodo para registrar
  submit(myForm: FormGroup) {
    console.log(myForm.value)
    if(myForm.status == 'VALID') {
      this.userService.registro(myForm.value).subscribe({
        next: (data) => { console.log(data); }, 
        error: (err) => { 
          console.log(err); 
          this.mensajeError = err;
        },
        complete: () => { 
          console.log("Done") 
          this.router.navigateByUrl('/dashboard');
        }
      });
    }
  }
}
