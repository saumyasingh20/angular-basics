import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoService } from './services/todo.service';
import { UserComponent } from './components/user/user.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DirectivesComponent } from './directives/directives.component';
import { UsersComponent } from './components/users/users.component';
import {NgswitchdemoComponent} from './components/ngswitchdemo/ngswitchdemo.component';
import { DatabindingdemoComponent } from './components/databindingdemo/databindingdemo.component';
import { NgstylenclassdemoComponent } from './components/ngstyledemo/ngstyledemo.component';

import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { ProductmasterComponent } from './components/productmaster/productmaster.component';
import { TodosComponent } from './components/todos/todos.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatatypesComponent,
    DirectivesComponent,
    UsersComponent,
    NgswitchdemoComponent,
    DatabindingdemoComponent,
    NgstylenclassdemoComponent,
    NgclassdemoComponent,
    ProductmasterComponent,
    TodosComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
