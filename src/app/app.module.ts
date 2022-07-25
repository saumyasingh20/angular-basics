import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ParenttwoComponent } from './components/parenttwo/parenttwo.component';
import { ChildtwoComponent } from './components/childtwo/childtwo.component';

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
    TemplateFormComponent,
    ReactiveFormComponent,
    ParentOneComponent,
    ChildOneComponent,
    ParenttwoComponent,
    ChildtwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
