import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesHistoryListComponent } from './dishes-history-list.component';

describe('DishesHistoryListComponent', () => {
  let component: DishesHistoryListComponent;
  let fixture: ComponentFixture<DishesHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesHistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishesHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
