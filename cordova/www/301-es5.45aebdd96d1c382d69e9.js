!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[301],{9301:function(n,o,i){i.r(o),i.d(o,{AdminModule:function(){return Z}});var r=i(8583),a=i(8307),c=i(5319),d=i(7716),s=i(48),l=i(4758),g=i(5826),u=i(3738),p=i(1095),h=i(8590);function m(t,n){if(1&t){var e=d.EpF();d.TgZ(0,"mat-card",4),d._UZ(1,"img",5),d.TgZ(2,"mat-card-content",6),d.TgZ(3,"p"),d.TgZ(4,"b"),d._uU(5,"Nombre: "),d.qZA(),d._uU(6),d.qZA(),d._UZ(7,"br"),d.TgZ(8,"p"),d._uU(9),d.qZA(),d.qZA(),d.TgZ(10,"mat-card-actions",7),d.TgZ(11,"button",8,9),d.NdJ("click",function(){d.CHM(e);var t=d.oxw().$implicit;return d.oxw().verDetalle(t)}),d._uU(13,"Ver detalle"),d.qZA(),d.qZA(),d.qZA()}if(2&t){var o=d.oxw().$implicit,i=d.oxw();d.xp6(1),d.MGl("src","../../../../assets/images/",o.image,"",d.LSH),d.xp6(5),d.hij(" ",o.name," "),d.xp6(3),d.hij(" ",o.description.substring(0,100),"... "),d.xp6(2),d.Q6J("matTooltipPosition",i.variablesSvc.positionsTooltip[0])}}function b(t,n){if(1&t&&(d.ynx(0),d.YNc(1,m,14,4,"ng-template",3),d.BQk()),2&t){var e=n.$implicit;d.xp6(1),d.Q6J("id",e.id)}}var _,f=((_=function(){function n(e,o){t(this,n),this.variablesSvc=e,this.userSvc=o,this.customOptions={loop:!1,mergeFit:!0,autoplayTimeout:3e3,autoplay:!0,autoplaySpeed:950,autoplayHoverPause:!0,autoplayMouseleaveTimeout:3e3,center:!1,autoHeight:!1,autoWidth:!1,lazyLoad:!1,lazyLoadEager:1,merge:!1,rewind:!0,responsiveRefreshRate:5e3,stagePadding:0,startPosition:0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,navText:["Atr\xe1s","Siguiente"],margin:1,responsive:{0:{items:1,nav:!0},400:{items:2,nav:!0},600:{items:3,nav:!0},1e3:{items:4,nav:!0}},nav:!0},this.subs=new c.w,this.variablesSvc.title="Listado con carrusel",this.getAllUsers()}return e(n,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}},{key:"getAllUsers",value:function(){var t=this;this.subs=this.userSvc.getAllUsers().subscribe(function(n){t.variablesSvc.usersOriginal=n,t.variablesSvc.users=n})}},{key:"verDetalle",value:function(t){this.userSvc.verDetalleUsuario(t)}}]),n}()).\u0275fac=function(t){return new(t||_)(d.Y36(s.a),d.Y36(l.K))},_.\u0275cmp=d.Xpm({type:_,selectors:[["app-list-user-carousel"]],decls:3,vars:2,consts:[[1,"list-content2"],[3,"options"],[4,"ngFor","ngForOf"],["carouselSlide","",3,"id"],[1,"card"],["mat-card-image","","alt","Photo",1,"image",3,"src"],[1,"content"],[1,"detail"],["mat-raised-button","","matTooltip","Detalle","matTooltipHideDelay","100","matTooltipClass","tooltip","aria-label","Button that displays a tooltip that hides when scrolled out of the container","color","","mat-button","",3,"matTooltipPosition","click"],["tooltip","matTooltip"]],template:function(t,n){1&t&&(d.TgZ(0,"div",0),d.TgZ(1,"owl-carousel-o",1),d.YNc(2,b,2,1,"ng-container",2),d.qZA(),d.qZA()),2&t&&(d.xp6(1),d.Q6J("options",n.customOptions),d.xp6(1),d.Q6J("ngForOf",n.variablesSvc.users))},directives:[g.Fy,r.sg,g.Mp,u.a8,u.G2,u.dn,u.hq,p.lW,h.gM],styles:[".list-content2[_ngcontent-%COMP%]{width:99%;margin-top:.5%;margin-left:.5%;height:90%;overflow-x:hidden;overflow-y:hidden}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:85%;margin:1%;background-color:#d4d8db;padding:20px;justify-content:center;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;height:10%;text-align:center;justify-content:center}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:50%;margin-left:.2%}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:30%}@media (max-width: 480px){.list-content2[_ngcontent-%COMP%]{width:99%;margin-top:.5%;margin-left:.5%;height:90%;overflow-x:hidden;overflow-y:hidden}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:85%;margin:1%;height:400px;background-color:#d4d8db;padding:10px;justify-content:center;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;height:10%;text-align:center;justify-content:center}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:30%;margin-top:1%;margin-left:.2%}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:45%}}@media only screen and (min-width: 481px) and (max-width: 780px){.list-content2[_ngcontent-%COMP%]{width:99%;margin-top:.5%;margin-left:.5%;height:90%;overflow-x:hidden;overflow-y:hidden}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:85%;margin:1%;height:600px;background-color:#d4d8db;padding:10px;justify-content:center;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;height:10%;text-align:center;justify-content:center}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:30%;margin-top:1%;margin-left:.2%}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:45%}}@media only screen and (min-width: 781px) and (max-width: 1024px){.list-content2[_ngcontent-%COMP%]{width:99%;margin-top:.5%;margin-left:.5%;height:90%;overflow-x:hidden;overflow-y:hidden}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:90%;margin:1%;height:450px;background-color:#d4d8db;padding:10px;justify-content:center;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;height:10%;text-align:center;justify-content:center}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:30%;margin-top:1%;margin-left:.2%}.list-content2[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:45%}}"]}),_);function C(t,n){if(1&t){var e=d.EpF();d.TgZ(0,"mat-card",2),d._UZ(1,"img",3),d.TgZ(2,"mat-card-content",4),d.TgZ(3,"p"),d.TgZ(4,"b"),d._uU(5,"Nombre: "),d.qZA(),d._uU(6),d.qZA(),d._UZ(7,"br"),d.TgZ(8,"p"),d._uU(9),d.qZA(),d.qZA(),d.TgZ(10,"mat-card-actions",5),d.TgZ(11,"button",6,7),d.NdJ("click",function(){var t=d.CHM(e).$implicit;return d.oxw().verDetalle(t)}),d._uU(13,"Ver detalle"),d.qZA(),d.qZA(),d.qZA()}if(2&t){var o=n.$implicit,i=d.oxw();d.xp6(1),d.MGl("src","../../../../assets/images/",o.image,"",d.LSH),d.xp6(5),d.hij(" ",o.name," "),d.xp6(3),d.hij(" ",o.description.substring(0,100),"... "),d.xp6(2),d.Q6J("matTooltipPosition",i.variablesSvc.positionsTooltip[0])}}var M=function(){var n=function(){function n(e,o){t(this,n),this.variablesSvc=e,this.userSvc=o,this.subs=new c.w,this.variablesSvc.title="Listado de usuarios",this.getAllUsers()}return e(n,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}},{key:"getAllUsers",value:function(){var t=this;this.subs=this.userSvc.getAllUsers().subscribe(function(n){t.variablesSvc.usersOriginal=n,t.variablesSvc.users=n})}},{key:"verDetalle",value:function(t){this.userSvc.verDetalleUsuario(t)}}]),n}();return n.\u0275fac=function(t){return new(t||n)(d.Y36(s.a),d.Y36(l.K))},n.\u0275cmp=d.Xpm({type:n,selectors:[["app-list-user-default"]],decls:2,vars:1,consts:[[1,"list-content"],["class","card",4,"ngFor","ngForOf"],[1,"card"],["mat-card-image","","alt","Photo",1,"image",3,"src"],[1,"content"],[1,"detail"],["mat-raised-button","","matTooltip","Detalle","matTooltipHideDelay","100","matTooltipClass","tooltip","aria-label","Button that displays a tooltip that hides when scrolled out of the container","color","","mat-button","",3,"matTooltipPosition","click"],["tooltip","matTooltip"]],template:function(t,n){1&t&&(d.TgZ(0,"div",0),d.YNc(1,C,14,4,"mat-card",1),d.qZA()),2&t&&(d.xp6(1),d.Q6J("ngForOf",n.variablesSvc.users))},directives:[r.sg,u.a8,u.G2,u.dn,u.hq,p.lW,h.gM],styles:[".list-content[_ngcontent-%COMP%]{width:100%;margin-top:5px;height:90%;display:grid;grid-template-columns:24% 24% 24% 24%;justify-content:center;overflow-x:hidden;overflow-y:auto}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:1%;background-color:#d4d8db;padding:20px;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;height:10%;text-align:center;justify-content:center}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:50%}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:30%}@media (max-width: 480px){.list-content[_ngcontent-%COMP%]{width:100%;margin-top:5px;height:90%;display:grid;grid-template-columns:96%;justify-content:center;overflow-x:hidden;overflow-y:auto}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:1%;background-color:#d4d8db;padding:20px;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;height:10%;text-align:center;justify-content:center}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:40%}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:40%}}@media only screen and (min-width: 481px) and (max-width: 780px){.list-content[_ngcontent-%COMP%]{width:100%;margin-top:5px;height:90%;display:grid;grid-template-columns:32% 32% 32%;justify-content:center;overflow-x:hidden;overflow-y:auto}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:1%;background-color:#d4d8db;padding:20px;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;height:10%;text-align:center;justify-content:center}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:40%}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:40%}}@media only screen and (min-width: 781px) and (max-width: 1024px){.list-content[_ngcontent-%COMP%]{width:100%;margin-top:5px;height:90%;display:grid;grid-template-columns:24% 24% 24% 24%;justify-content:center;overflow-x:hidden;overflow-y:auto}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:1%;background-color:#d4d8db;padding:20px;text-align:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{width:100%;height:10%;text-align:center;justify-content:center}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:40%}.list-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:40%;margin-left:3%}}"]}),n}(),O=i(2522),P=i(6627),v=i(3017),x=i(9992),w=[{path:"",component:function(){var n=function(){function n(e,o){t(this,n),this.variablesSvc=e,this.userSvc=o,this.opened=!0,this.ocultarMenu()}return e(n,[{key:"ngOnInit",value:function(){}},{key:"ocultarMenu",value:function(){var t=this;setTimeout(function(){t.opened=!1},1e3)}},{key:"buscar",value:function(t){this.userSvc.buscar(t)}}]),n}();return n.\u0275fac=function(t){return new(t||n)(d.Y36(s.a),d.Y36(l.K))},n.\u0275cmp=d.Xpm({type:n,selectors:[["app-admin"]],decls:32,vars:5,consts:[["color","primary",1,"navbar"],["color","primary",3,"click"],["mat-raised-button","","matTooltip","Menu","matTooltipHideDelay","100","matTooltipClass","tooltip","aria-label","Button that displays a tooltip that hides when scrolled out of the container",3,"matTooltipPosition"],["tooltip","matTooltip"],["routerLink","/home",1,"link"],[1,"fill-remaining-space"],["mode","side",3,"opened","openedChange"],["sideNav",""],["mat-raised-button","","matTooltip","Listado","matTooltipHideDelay","100","matTooltipClass","tooltip","aria-label","Button that displays a tooltip that hides when scrolled out of the container",3,"matTooltipPosition"],["mat-list-item","","routerLink","list-user-default","routerLinkActive","link-active"],["mat-raised-button","","matTooltip","Listado carrusel","matTooltipHideDelay","100","matTooltipClass","tooltip","aria-label","Button that displays a tooltip that hides when scrolled out of the container",3,"matTooltipPosition"],["mat-list-item","","routerLink","list-user-carousel","routerLinkActive","link-active"],[1,"superior"],["type","text","matInput","","placeholder","Buscar","formControlName","","required","",1,"search",3,"keyup"],["search",""]],template:function(t,n){if(1&t){var e=d.EpF();d.TgZ(0,"mat-toolbar",0),d.TgZ(1,"span",1),d.NdJ("click",function(){return n.opened=!n.opened}),d.TgZ(2,"mat-icon",2,3),d._uU(4,"menu"),d.qZA(),d.qZA(),d._uU(5," \xa0 \xa0 "),d.TgZ(6,"a",4),d._uU(7,"Inicio"),d.qZA(),d._UZ(8,"span",5),d.qZA(),d.TgZ(9,"mat-sidenav-container"),d.TgZ(10,"mat-sidenav",6,7),d.NdJ("openedChange",function(t){return n.opened=t}),d.TgZ(12,"mat-nav-list",8,3),d.TgZ(14,"a",9),d.TgZ(15,"mat-icon"),d._uU(16,"label_important"),d.qZA(),d._uU(17,"\xa0Usuarios "),d.qZA(),d.qZA(),d.TgZ(18,"mat-nav-list",10,3),d.TgZ(20,"a",11),d.TgZ(21,"mat-icon"),d._uU(22,"label_important"),d.qZA(),d._uU(23,"\xa0 Usuarios (Carrusel) "),d.qZA(),d.qZA(),d.qZA(),d.TgZ(24,"mat-sidenav-content"),d.TgZ(25,"div",12),d.TgZ(26,"h2"),d._uU(27),d.qZA(),d._UZ(28,"span",5),d.TgZ(29,"input",13,14),d.NdJ("keyup",function(){d.CHM(e);var t=d.MAs(30);return n.buscar(t.value)}),d.qZA(),d.qZA(),d._UZ(31,"router-outlet"),d.qZA(),d.qZA()}2&t&&(d.xp6(2),d.Q6J("matTooltipPosition",n.variablesSvc.positionsTooltip[0]),d.xp6(8),d.Q6J("opened",n.opened),d.xp6(2),d.Q6J("matTooltipPosition",n.variablesSvc.positionsTooltip[0]),d.xp6(6),d.Q6J("matTooltipPosition",n.variablesSvc.positionsTooltip[0]),d.xp6(9),d.Oqu(n.variablesSvc.title))},directives:[O.Ye,P.Hw,h.gM,a.yS,v.TM,v.JX,x.Hk,x.Tg,a.Od,v.Rh,a.lC],styles:[".navbar[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1000;width:100%;height:10%}.navbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}mat-sidenav-container[_ngcontent-%COMP%]{width:100%;height:90%;overflow:hidden}.mat-sidenav[_ngcontent-%COMP%]{width:auto;cursor:pointer;background-color:#683fb5;position:fixed;top:10%;z-index:1000}mat-sidenav-content[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:hidden;height:auto;height:100%}mat-sidenav-content[_ngcontent-%COMP%]   .superior[_ngcontent-%COMP%]{width:100%;height:5%;background-color:#d4d8db;display:flex;padding:1%;overflow:hidden}mat-sidenav-content[_ngcontent-%COMP%]   .superior[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:40%;text-align:center}mat-sidenav-content[_ngcontent-%COMP%]   .superior[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{border-radius:30px;width:40%;height:100%;margin-right:2%;font-size:1.2rem;-webkit-border-radius:30px;-moz-border-radius:30px;-ms-border-radius:30px;-o-border-radius:30px}@media (max-width: 480px){.navbar[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1000;width:100%;height:10%}.navbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}mat-sidenav-container[_ngcontent-%COMP%]{width:100%;height:90%;overflow:hidden}.mat-sidenav[_ngcontent-%COMP%]{width:auto;cursor:pointer;background-color:#683fb5;position:fixed;top:10%;z-index:1000}mat-sidenav-content[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:hidden;height:auto;height:100%}mat-sidenav-content[_ngcontent-%COMP%]   .superior[_ngcontent-%COMP%]{width:100%;height:5%;background-color:#d4d8db;display:flex;padding:1%;overflow:hidden}mat-sidenav-content[_ngcontent-%COMP%]   .superior[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:70%;font-size:15px;text-align:center}mat-sidenav-content[_ngcontent-%COMP%]   .superior[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{border-radius:30px;width:30%;height:80%;margin-right:2%;font-size:.8rem;-webkit-border-radius:30px;-moz-border-radius:30px;-ms-border-radius:30px;-o-border-radius:30px}}"]}),n}(),children:[{path:"list-user-default",component:M},{path:"list-user-carousel",component:f},{path:"",redirectTo:"list-user-default",pathMatch:"full"}]}],y=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[[a.Bz.forChild(w)],a.Bz]}),n}(),T=i(6522),Z=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[[r.ez,y,T.q]]}),n}()}}])}();