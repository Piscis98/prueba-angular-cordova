import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { VariablesService } from 'src/app/shared/services/variables/variables.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public opened:boolean=true;

  constructor(public variablesSvc:VariablesService, private userSvc:UserService) {
    
    this.ocultarMenu();

  }

  ngOnInit(): void {

  }



  ocultarMenu(){

    setTimeout(() => {
      
      this.opened=false;

    }, 1000);

  }


  /*Filtrar usuarios*/

  buscar(dato:string){

    this.userSvc.buscar(dato);

  }

}
