import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCachorroComponent } from './cadastro-cachorro.component';

describe('CadastroCachorroComponent', () => {
  let component: CadastroCachorroComponent;
  let fixture: ComponentFixture<CadastroCachorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCachorroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
