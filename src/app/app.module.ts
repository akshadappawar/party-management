import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { PartymanagementRoutingModule } from './partymanagement/partymanagement-routing.module';
import { PartymanagementComponent } from './partymanagement/partymanagement.component';
import { PartymanagementModule } from './partymanagement/partymanagement.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    LoginModule,
    LoginRoutingModule,
    PartymanagementRoutingModule,
    PartymanagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
