import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { CardComponent } from './card/card.component';
import { TaskListService } from './services/task.list.service';
import { TaskContainerComponent } from './task-container.component';

class MatDialogMock {
  // tslint:disable-next-line: typedef
  public open() {
    return {
      afterClosed: () => of({})
    };
  }
}

describe('TaskContainerComponent', () => {
  let component: TaskContainerComponent;
  let fixture: ComponentFixture<TaskContainerComponent>;
  let service: TaskListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskContainerComponent, CardComponent],
      providers: [TaskListService, {
        provide: MatDialog, useClass: MatDialogMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskContainerComponent);
    service = TestBed.get(TaskListService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { CardComponent } from './card/card.component';
import { TaskListService } from './services/task.list.service';
import { TaskContainerComponent } from './task-container.component';

class MatDialogMock {
  // tslint:disable-next-line: typedef
  public open() {
    return {
      afterClosed: () => of({})
    };
  }
}

describe('TaskContainerComponent', () => {
  let component: TaskContainerComponent;
  let fixture: ComponentFixture<TaskContainerComponent>;
  let service: TaskListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskContainerComponent, CardComponent],
      providers: [TaskListService, {
        provide: MatDialog, useClass: MatDialogMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskContainerComponent);
    service = TestBed.get(TaskListService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default value defined', () => {
    expect(component.taskList).toBeDefined();
    expect(component.dialogRef).toBeUndefined();
  });
  it('should get all defined task list', () => {
    spyOn(component, 'getAllTaskList');
    component.ngOnInit();
    expect(component.getAllTaskList).toHaveBeenCalled();
  });
  it('should get all defined task list from api', () => {
    spyOn(service, 'getTaskList').and.returnValue([{ id: 1, name: 'TO-DO', cards: [] },
    { id: 2, name: 'In Progress', cards: [] },
    { id: 3, name: 'Done', cards: [] }]);
    expect(component.taskList.length).toBeGreaterThan(0);
  });
  it('should open model popup to add new lsit', () => {
    spyOn(component, 'getAllTaskList');
    component.createList();
    expect(component.getAllTaskList).toHaveBeenCalled();
  });
});


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default value defined', () => {
    expect(component.taskList).toBeDefined();
    expect(component.dialogRef).toBeUndefined();
  });
  it('should get all defined task list', () => {
    spyOn(component, 'getAllTaskList');
    component.ngOnInit();
    expect(component.getAllTaskList).toHaveBeenCalled();
  });
  it('should get all defined task list from api', () => {
    spyOn(service, 'getTaskList').and.returnValue([{ id: 1, name: 'TO-DO', cards: [] },
    { id: 2, name: 'In Progress', cards: [] },
    { id: 3, name: 'Done', cards: [] }]);
    expect(component.taskList.length).toEqual(3);
  });
  it('should open model popup to add new lsit', () => {
    spyOn(component, 'getAllTaskList');
    component.createList();
    expect(component.getAllTaskList).toHaveBeenCalled();
  });
});
