import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskviewComponent } from './taskview/taskview.component';


const routes: Routes = [
  {path: '', component: TaskviewComponent},
  {path: ':listId', component: TaskviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
