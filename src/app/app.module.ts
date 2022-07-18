import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//;
import { UserComponent } from './components/user/user.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DirectivesComponent } from './directives/directives.component';
import { UsersComponent } from './components/users/users.component';
import {NgswitchdemoComponent} from './components/ngswitchdemo/ngswitchdemo.component';
import { DatabindingdemoComponent } from './components/databindingdemo/databindingdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatatypesComponent,
    DirectivesComponent,
    UsersComponent,
    NgswitchdemoComponent,
    DatabindingdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
