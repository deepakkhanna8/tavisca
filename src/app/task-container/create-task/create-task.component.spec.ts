import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { TaskListService } from '../services/task.list.service';

import { CreateTaskComponent } from './create-task.component';

describe('CreateTaskComponent', () => {
  let component: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  let service = TaskListService;
  let dialogService = MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaskComponent ],
      imports: [MatDialogModule,  FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    service = TestBed.get(TaskListService);
    dialogService = TestBed.get(MatDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create ', () => {
    spyOn(component, 'createForm');
    component.ngOnInit();
    expect(component.createForm).toHaveBeenCalled();
  });
  it('should create form instance ', () => {
    component.createForm();
    expect(component.form).toBeDefined();
  });
  it('should create new task list ', () => {
    spyOn(component, 'close');
    component.createForm();
    component.form.controls.taskListName.setValue('taskname');
    component.createList();
    expect(component.close).toHaveBeenCalled();
  });
  it('should close dialog ', () => {
    expect(component.close).toBeDefined();
  });
});
