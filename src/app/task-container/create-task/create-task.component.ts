import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { TaskListService } from '../services/task.list.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  public form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              public readonly service: TaskListService,
              public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      taskListName: new FormControl('', Validators.required)
    });
  }
  public createList(): void {
    const control = this.form.get('taskListName');
    this.service.addTaskList(control.value);
    this.close();
  }

  public close(): void {
    this.dialog.closeAll();
  }

}
