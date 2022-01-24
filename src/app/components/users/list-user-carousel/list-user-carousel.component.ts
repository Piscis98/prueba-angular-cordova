import { Component, OnInit, OnDestroy} from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { VariablesService } from 'src/app/shared/services/variables/variables.service';
import { User } from 'src/app/shared/models/user';
import { Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-list-user-carousel',
  templateUrl: './list-user-carousel.component.html',
  styleUrls: ['./list-user-carousel.component.scss']
})
export class ListUserCarouselComponent implements OnInit, OnDestroy {

  customOptions: OwlOptions = {
    loop: false,
    mergeFit:true,
    autoplayTimeout:3000,
    autoplay:true,
    autoplaySpeed:950,
    autoplayHoverPause:true,
    autoplayMouseleaveTimeout:3000,
    center:false,
    autoHeight:false,
    autoWidth:false,
    lazyLoad:false,
    lazyLoadEager:1,
    merge:false,
    rewind:true,
    responsiveRefreshRate:5000,
    stagePadding:0,
    startPosition:0,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Atrás', 'Siguiente'],
    margin:1,
    responsive:{

      0:{
        items:1,
        nav:true
        },
      400:{

        items:2,
        nav:true
      } ,
     600:{
        items:3,
        nav:true
    },
    1000:{
        items:4,
        nav:true
    }

    },
    nav: true
  }

  private subs:Subscription=new Subscription();

  constructor(public variablesSvc:VariablesService, private userSvc:UserService) { 

    this.variablesSvc.title='Listado con carrusel';

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
      //  console.log(this.variablesSvc.users);    
     })
 
   }

   /*Abrir detalle de usuario*/

  verDetalle(dato:User){


    this.userSvc.verDetalleUsuario(dato);


  }

}
