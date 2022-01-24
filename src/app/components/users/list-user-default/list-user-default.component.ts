import { Component, OnInit, OnDestroy} from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { VariablesService } from 'src/app/shared/services/variables/variables.service';
import { User } from 'src/app/shared/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-user-default',
  templateUrl: './list-user-default.component.html',
  styleUrls: ['./list-user-default.component.scss']
})
export class ListUserDefaultComponent implements OnInit, OnDestroy {

  private subs:Subscription=new Subscription();

  constructor(public variablesSvc:VariablesService, private userSvc:UserService) { 

   this.variablesSvc.title='Listado de usuarios';
   this.getAllUsers();

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
}


/*Obtener la información de los usuarios*/

  getAllUsers():void{

   this.subs = this.userSvc.getAllUsers().subscribe((data:User[])=>{
      this.variablesSvc.usersOriginal=data;
      this.variablesSvc.users=data;
      // console.log(this.variablesSvc.users);    
    })

  }



  /*Abrir detalle de usuario*/

  verDetalle(dato:User){


    this.userSvc.verDetalleUsuario(dato);


  }

}
