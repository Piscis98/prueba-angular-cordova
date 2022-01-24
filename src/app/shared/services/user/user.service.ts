import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { VariablesService } from '../variables/variables.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private variablesSvc:VariablesService,public dialog: MatDialog) { }

  /*Retorna todos los usuarios*/

  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>('../../assets/data/mock_data.json');
  }

/*Filtra los usuarios y cambia el valor del array de usuarios el cuál será el mostrado en las vistas correspondientes*/

  buscar(dato:string){

    var result:User[]=[];

    if(dato.length<2){
      this.variablesSvc.users=this.variablesSvc.usersOriginal;
    }else{

      this.variablesSvc.usersOriginal.map((data:User)=>{

        if(data.name.toLowerCase().indexOf(dato.toLowerCase())> -1 || data.gender.toLowerCase().indexOf(dato.toLowerCase())> -1 || data.email.toLowerCase().indexOf(dato.toLowerCase())> -1){

            result.push(data);
          
        }

      })


      setTimeout(()=>{
        this.variablesSvc.users=result;
  
        result = [];
      },300);

    }
    
  }


  /*Abri detalle usuario*/

  verDetalleUsuario(dato:User){

    
    const dialogRef = this.dialog.open(DialogComponent,{


      width:'65%',
      height:'80%',
      autoFocus:false,
      panelClass:'mat-dialog-container',
      data:{

        id:dato.id,
        name:dato.name,
        email:dato.email,
        gender:dato.gender,
        image:dato.image,
        description:dato.description

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    

  }


}
