import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';
import { FormsModule } from '@angular/forms';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve calcular soma corretamente', () => {
    component.numero1 = 10;
    component.numero2 = 5;
    component.operacao = 'soma';
    component.calcular();
    expect(component.resultado).toBe('15.00');
  });

  it('deve calcular subtração corretamente', () => {
    component.numero1 = 10;
    component.numero2 = 5;
    component.operacao = 'subtracao';
    component.calcular();
    expect(component.resultado).toBe('5.00');
  });

  it('deve calcular multiplicação corretamente', () => {
    component.numero1 = 10;
    component.numero2 = 5;
    component.operacao = 'multiplicacao';
    component.calcular();
    expect(component.resultado).toBe('50.00');
  });

  it('deve calcular divisão corretamente', () => {
    component.numero1 = 10;
    component.numero2 = 5;
    component.operacao = 'divisao';
    component.calcular();
    expect(component.resultado).toBe('2.00');
  });

  it('deve retornar erro ao tentar dividir por zero', () => {
    component.numero1 = 10;
    component.numero2 = 0;
    component.operacao = 'divisao';
    component.calcular();
    expect(component.resultado).toBe('Erro: Divisão por zero');
  });
});
