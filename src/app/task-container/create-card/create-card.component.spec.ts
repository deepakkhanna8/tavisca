import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';

import { CreateCardComponent } from './create-card.component';

describe('CreateCardComponent', () => {
  let component: CreateCardComponent;
  let fixture: ComponentFixture<CreateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCardComponent],
      imports: [MatDialogModule, FormsModule, ReactiveFormsModule],
      providers: [MatDialog,
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create ', () => {
    spyOn(component, 'createCardForm');
    component.ngOnInit();
    expect(component.createCardForm).toHaveBeenCalled();
  });
  it('should create form instance ', () => {
    component.createCardForm();
    expect(component.createCardForm).toBeDefined();
  });
  it('should create new task list ', () => {
    spyOn(component, 'close');
    component.createCardForm();
    component.cardForm.controls.card.setValue('card');
    component.data = { task: { id: 1 } };
    component.addCard();
    expect(component.close).toHaveBeenCalled();
  });
  it('should close dialog ', () => {
    expect(component.close).toBeDefined();
  });
});
