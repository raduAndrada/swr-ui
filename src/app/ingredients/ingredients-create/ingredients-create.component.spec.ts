import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsCreateComponent } from './ingredients-create.component';

describe('IngredientsCreateComponent', () => {
  let component: IngredientsCreateComponent;
  let fixture: ComponentFixture<IngredientsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
