import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCanilComponent } from './cadastro-canil.component';

describe('CadastroCanilComponent', () => {
  let component: CadastroCanilComponent;
  let fixture: ComponentFixture<CadastroCanilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCanilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCanilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
