import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/components/home/home.component';
import { StudentsComponent } from './shared/components/students/students.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TodoformComponent } from './shared/components/todoform/todoform.component';
import { TodolistComponent } from './shared/components/todolist/todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { GetconfirmComponent } from './shared/components/getconfirm/getconfirm.component';
import { StudentformComponent } from './shared/components/studentform/studentform.component';
import { StudentlistComponent } from './shared/components/studentlist/studentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    TodosComponent,
    NavbarComponent,
    TodoformComponent,
    TodolistComponent,
    GetconfirmComponent,
    StudentformComponent,
    StudentlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
