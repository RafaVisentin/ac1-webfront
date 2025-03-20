import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApoliceComponent } from './apolice.component';
import { FormsModule } from '@angular/forms';

describe('ApoliceComponent', () => {
  let component: ApoliceComponent;
  let fixture: ComponentFixture<ApoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApoliceComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ApoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve calcular apólice corretamente para homem com 25 anos e carro de R$ 100.000', () => {
    component.sexo = 'masculino';
    component.idade = 25;
    component.valorAutomovel = 100000;
    component.calcularApolice();
    expect(component.valorApolice).toBe('15000.00');
  });

  it('deve calcular apólice corretamente para homem com 30 anos e carro de R$ 100.000', () => {
    component.sexo = 'masculino';
    component.idade = 30;
    component.valorAutomovel = 100000;
    component.calcularApolice();
    expect(component.valorApolice).toBe('10000.00');
  });

  it('deve calcular apólice corretamente para mulher com carro de R$ 100.000', () => {
    component.sexo = 'feminino';
    component.valorAutomovel = 100000;
    component.calcularApolice();
    expect(component.valorApolice).toBe('8000.00');
  });
});
