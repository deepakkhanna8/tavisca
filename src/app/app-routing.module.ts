import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MainViewComponent } from './pages/main-view/main-view.component';
import {TaskContainerComponent } from './task-container/task-container.component';

const routes: Routes = [
  // { path: 'main-view', component: MainViewComponent },
  { path: '', component: TaskContainerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
