import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CreateCardComponent } from '../create-card/create-card.component';
import { ICard } from '../models/card.model';
import { ITaskList } from '../models/task.model';
import { TaskListService } from '../services/task.list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public task: ITaskList;
  public cards: ICard[] = [];
  public dialogRef: any;

  constructor(public dialog: MatDialog) { }

  // tslint:disable-next-line: no-empty
  public ngOnInit(): void {
  }
  public openCreateCard(model: ITaskList): void {
    this.dialogRef = this.dialog.open(CreateCardComponent, {
      data: {
        task: model
      }
    });
    // this.dialogRef.afterClosed().subscribe((value: any) => {
    //   console.log(`Dialog sent: ${value}`);
    // });
  }
  
public trackItem(index: number, item: ITaskList) {
    return item.id;
  }
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CreateCardComponent } from '../create-card/create-card.component';
import { ICard } from '../models/card.model';
import { ITaskList } from '../models/task.model';
import { TaskListService } from '../services/task.list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public task: ITaskList;
  public cards: ICard[] = [];
  public dialogRef: any;

  constructor(public dialog: MatDialog,
              private readonly service: TaskListService) { }

  // tslint:disable-next-line: no-empty
  public ngOnInit(): void {
  }
  public openCreateCard(model: ITaskList): void {
    this.dialogRef = this.dialog.open(CreateCardComponent, {
      data: {
        task: model
      }
    });
    this.dialogRef.afterClosed().subscribe((value: any) => {
      console.log(`Dialog sent: ${value}`);
      this.task = this.service.getTaskListById(model.id)[0];
    });
  }

  public trackItem(index: number, item: ITaskList) {
    return item.id;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container && event.previousContainer.data[0]) {
        const card = JSON.parse(JSON.stringify(event.previousContainer.data[0]));
        this.service.addCards(+event.container.id, card.name);
        this.service.removeCards(+event.previousContainer.id, card.id);
      }
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
