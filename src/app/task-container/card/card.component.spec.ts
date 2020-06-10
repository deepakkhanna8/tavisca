import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';

import { CardComponent } from './card.component';

class MatDialogMock {
  // tslint:disable-next-line: typedef
  public open() {
    return {
      afterClosed: () => of({})
    };
  }
}

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let service: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [CardComponent],
      providers: [{
        provide: MatDialog, useClass: MatDialogMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    service = TestBed.get(MatDialog);
    component = fixture.componentInstance;
    component.task = { id: 1, name: 'TO-DO', cards: [] };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default defined', () => {
    expect(component.task).toBeDefined();
    expect(component.dialogRef).toBeUndefined();
    expect(component.cards).toBeDefined();
  });
  it('should open create card model popup', () => {
    expect(component.openCreateCard).toBeDefined();
  });
});
