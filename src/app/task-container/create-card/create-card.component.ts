import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { TaskListService } from '../services/task.list.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {

  public cardForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly service: TaskListService,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  public ngOnInit(): void {
    this.createCardForm();
  }
  public createCardForm(): void {
    this.cardForm = this.formBuilder.group({
      card: new FormControl('', Validators.required)
    });
  }

  public addCard(): void {
    const control = this.cardForm.get('card');
    this.service.addCards(this.data.task.id, control.value);
    this.close();
  }

  public close(): void {
    this.dialog.closeAll();
  }
}
