import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StorageService } from './shared/services/storage/storage.service';
import { TranslatorService } from './shared/services/translator/translator.service';
import { UserService } from './shared/services/user/user.service';
import { InterceptorService } from './shared/services/interceptor/interceptor.service';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { ContainerAppComponent } from './components/container-app/container-app.component';
import { DetailUserComponent } from './components/users/detail-user/detail-user.component';
import { ListUserDefaultComponent } from './components/users/list-user-default/list-user-default.component';
import { ListUserCarouselComponent } from './components/users/list-user-carousel/list-user-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    DialogComponent,
    ContainerAppComponent,
    DetailUserComponent,
    ListUserDefaultComponent,
    ListUserCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  entryComponents:[DialogComponent],
  providers: [StorageService, TranslatorService,UserService, InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
