import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { User } from 'src/app/shared/models/user';
import { VariablesService } from 'src/app/shared/services/variables/variables.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:User, public variablesSvc:VariablesService) { 

      // console.log(data);
      

    }

  ngOnInit(): void {
  }

  cerrarDialogo(){
    this.dialogRef.close();
  }

}
