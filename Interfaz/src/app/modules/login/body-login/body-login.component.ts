import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnInit {
  public datosLogin : FormGroup;
  siteKey: string;
  textoContrasenia: boolean;

  constructor() {
    this.siteKey='6Lf-yJcgAAAAAHxzd7sG7Y0dEZo_avSBaU7RaG5-';
    this.datosLogin = new FormGroup({
      correoElectronico: new FormControl('',
            [Validators.required,
            Validators.email]),
      password: new FormControl('',
            Validators.required),
      captcha: new FormControl('',
            Validators.required)
    });
   }

  ngOnInit(): void {
  }

  ingresar(){
  }

  mostrarContrasenia() {
    this.textoContrasenia = !this.textoContrasenia;
  }
  get controls(){ return this.datosLogin.controls}


}
