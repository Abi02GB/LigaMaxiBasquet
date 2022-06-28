import { ModalOrgEquiposPreinsComponent } from '../modal-org-equipos-preins/modal-org-equipos-preins.component';
import { ModalOrgEquiposRegisComponent } from '../modal-org-equipos-regis/modal-org-equipos-regis.component';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api-services/api-services';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-body-vista-organizador',
  templateUrl: './body-vista-organizador.component.html',
  styleUrls: ['./body-vista-organizador.component.css']
})
export class BodyVistaOrganizadorComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal, private apiService : ApiService, private cookieService : CookieService) { }

  ngOnInit(): void {
  }
  crearTorneo(){
    this.router.navigate(['/registro-preinscripcion'])
  }
  equiposPreinscritos(): void {
    const modalFixture = this.modalService.open(ModalOrgEquiposPreinsComponent,
      { centered: true , size: 'lg', scrollable: true });
  }
  equiposRegistrados(): void {
    const modalFixture = this.modalService.open(ModalOrgEquiposRegisComponent,
      { centered: true , size: 'lg', scrollable: true });
  }
  crearPartido(){
    this.router.navigate(['/fixture'])
  }
}