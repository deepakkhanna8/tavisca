import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MainViewComponent } from './pages/main-view/main-view.component';
import { TaskContainerComponent } from './task-container/task-container.component'

import {DragDropModule} from '@angular/cdk/drag-drop';
// import { TaskComponentComponent } from './pages/task-component/task-component.component';
// import { StatusColumnComponent } from './pagesxxxxxxxxx/status-column/status-column.component';
import { CardPipe } from './task-container/filters/card.pipe';
import { CardComponent } from './task-container/card/card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTaskComponent } from './task-container/create-task/create-task.component';
import { CreateCardComponent } from './task-container/create-card/create-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskContainerComponent,
    CardPipe,
    CardComponent,
    CreateTaskComponent,
    CreateCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
