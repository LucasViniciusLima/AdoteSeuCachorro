import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarVisitaComponent } from './marcar-visita.component';

describe('MarcarVisitaComponent', () => {
  let component: MarcarVisitaComponent;
  let fixture: ComponentFixture<MarcarVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcarVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcarVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
