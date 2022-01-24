import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import {TooltipPosition} from '@angular/material/tooltip';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  /*Inicio variables generales*/

  positionsTooltip: TooltipPosition[] = ['below', 'above', 'left', 'right'];

  /*Fin variables generales*/

  /*Inicio variables módulo de usuarios*/

  public usersOriginal:User[]=[]; /*Copia de los usuarios originales para aplicar los filtros*/

  public users:User[]=[]; /*Usuarios a mostrar en las vistas*/

  public title:String=''; /*Título del módulo usuarios*/

  /*Fin variables módulo de usuarios*/

  constructor() { }
}
