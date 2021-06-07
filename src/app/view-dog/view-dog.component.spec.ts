import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDogComponent } from './view-dog.component';

describe('ViewDogComponent', () => {
  let component: ViewDogComponent;
  let fixture: ComponentFixture<ViewDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
