import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ICard } from './models/card.model';
import { ITaskList } from './models/task.model';
import { TaskListService } from './services/task.list.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  public taskList: ITaskList[] = [];
  public dialogRef: any;

  // tslint:disable-next-line: no-empty
  constructor(private readonly service: TaskListService,
              public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.getAllTaskList();
  }

  public getAllTaskList(): void {
    this.taskList = this.service.getTaskList();
  }
  public createList(): void {
    this.dialogRef = this.dialog.open(CreateTaskComponent, {
      data: {}
    });
    this.dialogRef.afterClosed().subscribe((value: any) => {
      console.log(`Dialog sent: ${value}`);
      this.getAllTaskList();
    });
  }
   public trackItem(index: any, item: ITaskList) {
    return item.cards.length; // or item.id
  }
}