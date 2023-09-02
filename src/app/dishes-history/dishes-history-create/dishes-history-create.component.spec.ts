import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesHistoryCreateComponent } from './dishes-history-create.component';

describe('DishesHistoryCreateComponent', () => {
  let component: DishesHistoryCreateComponent;
  let fixture: ComponentFixture<DishesHistoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesHistoryCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishesHistoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
