import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisMechanismComponent } from './tetris-mechanism.component';

describe('TetrisMechanismComponent', () => {
  let component: TetrisMechanismComponent;
  let fixture: ComponentFixture<TetrisMechanismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TetrisMechanismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisMechanismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
