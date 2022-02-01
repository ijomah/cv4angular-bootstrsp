import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixsliderComponent } from './pixslider.component';

describe('PixsliderComponent', () => {
  let component: PixsliderComponent;
  let fixture: ComponentFixture<PixsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
