import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app.routes';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AboutModule } from './about/about.module';
import { StartModule } from './start/start.module';
import { LoginModule } from './login/login.module';
import { ResourceModule } from './resource/resource.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AppRoutingModule, 
  
  AboutModule, StartModule, LoginModule, ResourceModule, HomeModule, SharedModule.forRoot(),
  
  Ng2BootstrapModule
  
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
