import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnInit {
  public datosLogin : FormGroup;
  siteKey: string;
  textoContrasenia: boolean;

  constructor(private apiService: ApiService, private router: Router, 
    private cookieService: CookieService) {
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

  iniciarSesion(){
    /*this.apiService.post('login', this.datosLogin.value).subscribe((res: any = []) => {
      this.cookieService.set('token_access', res.accessToken, 4 , '/' );
      this.router.navigate(['/']);
    });*/
    //para pruebas
    this.cookieService.set('token_access', this.siteKey, 4 , '/' );
    this.router.navigate(['/']);
  }

  mostrarContrasenia() {
    this.textoContrasenia = !this.textoContrasenia;
  }
  get controls(){ return this.datosLogin.controls}


}
