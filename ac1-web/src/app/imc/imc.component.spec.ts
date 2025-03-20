import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImcComponent } from './imc.component';
import { FormsModule } from '@angular/forms';

describe('ImcComponent', () => {
  let component: ImcComponent;
  let fixture: ComponentFixture<ImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImcComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve calcular IMC corretamente para peso 70kg e altura 1.75m', () => {
    component.peso = 70;
    component.altura = 1.75;
    component.calcularIMC();
    expect(component.imc).toBe('22.86');
    expect(component.classificacao).toBe('Peso normal');
  });

  it('deve classificar corretamente IMC de 30 como Obesidade grau I', () => {
    component.peso = 90;
    component.altura = 1.70;
    component.calcularIMC();
    expect(component.imc).toBe('31.14');
    expect(component.classificacao).toBe('Obesidade grau I');
  });

  it('deve exibir "Valores inválidos" se peso ou altura forem 0', () => {
    component.peso = 0;
    component.altura = 1.70;
    component.calcularIMC();
    expect(component.classificacao).toBe('Valores inválidos');

    component.peso = 70;
    component.altura = 0;
    component.calcularIMC();
    expect(component.classificacao).toBe('Valores inválidos');
  });
});
