import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFirstPageComponent } from './grid-first-page.component';

describe('GridFirstPageComponent', () => {
  let component: GridFirstPageComponent;
  let fixture: ComponentFixture<GridFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFirstPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
