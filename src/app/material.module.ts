import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';



const myModule=[MatButtonModule, MatToolbarModule,MatCardModule, MatIconModule, MatFormFieldModule, MatSidenavModule,MatDialogModule,MatTooltipModule, MatSelectModule, MatListModule];


@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports:[myModule]
})
export class MaterialModule { }
