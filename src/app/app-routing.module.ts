import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { StudentsComponent } from './shared/components/students/students.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'todo',
    component: TodosComponent,
  },

  {
    path: 'student',
    component: StudentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
