import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroJComponent implements OnInit {
  public formRegistroJugador: FormGroup;
  public listaEstadoCivil: any = [ "Soltero", "Casado", "Divorciado", "Viudo"];
  submitted = false;
  categoria = [];

  constructor(public formulario: FormBuilder
    ,private apiService:ApiService) {
    this.formRegistroJugador = new FormGroup({
      nombre: new FormControl ('',
                    [Validators.required, 
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                     Validators.minLength(5),
                     Validators.maxLength(80)]),
      primerApellido:new FormControl ('',
                      [Validators.required, 
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                      Validators.minLength(5),
                      Validators.maxLength(80)]),
      segundoApellido:new FormControl ('',
                      [Validators.required, 
                      Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                      Validators.minLength(5),
                      Validators.maxLength(80)]),
      correoElectronico: new FormControl ('', 
                    [Validators.required, 
                     Validators.email]),
      numeroIdentidad:  new FormControl ('', 
                    [Validators.required, 
                    Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$')]),
      paisJugador:new FormControl ('',
                    [Validators.required, 
                    Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                    Validators.minLength(5),
                    Validators.maxLength(80)]),
      estadoCivil: new FormControl('',
                    Validators.required),
      fechaNacimiento: new FormControl('',
                    Validators.required),             
      telefono: new FormControl ('', 
                    [Validators.required, 
                     Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{2})(?: *x(\\d+))?\\s*$')]),
      sexo:new FormControl('',
                    Validators.required),

      domicilio:new FormControl ('',
                     [Validators.required, 
                     Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$'),
                     Validators.minLength(5),
                     Validators.maxLength(80)]),
      numeroJugador: new FormControl ('', 
                     [Validators.required, 
                      Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{1})[-. )]*(\\d{1})[-. ]*$')]),

    }
                     );
}
  ngOnInit(): void {
  }

  get controls() { return this.formRegistroJugador.controls; }

  registrarJugador(){
    this.submitted = true;
    if (this.formRegistroJugador.invalid) {
      alert('Por favor ingrese datos validos, correspondientes a todos los campos');
      console.log(this.formRegistroJugador.controls);
      return;
    }else{
      console.log(this.formRegistroJugador.value);
      this.postServicio();
      this.getServicio();
    }  
    alert('Jugador registrado correctamente');
  }
  getServicio() {
   this.apiService.getAll('registroJugador').subscribe();
  }
  postServicio(){
    const registroJugadores = this.formRegistroJugador.value;
    this.apiService.post('registroJugador', registroJugadores).subscribe();
  }

}