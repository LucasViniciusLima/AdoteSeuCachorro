import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInteressadoComponent } from './cadastro-interessado.component';

describe('CadastroInteressadoComponent', () => {
  let component: CadastroInteressadoComponent;
  let fixture: ComponentFixture<CadastroInteressadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroInteressadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroInteressadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
