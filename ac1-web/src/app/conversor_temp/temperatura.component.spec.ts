import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperaturaComponent } from './temperatura.component';
import { FormsModule } from '@angular/forms';

describe('TemperaturaComponent', () => {
  let component: TemperaturaComponent;
  let fixture: ComponentFixture<TemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperaturaComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve converter 0°C corretamente', () => {
    component.celsius = 0;
    component.converterTemperatura();
    expect(component.fahrenheit).toBe('32.00');
    expect(component.kelvin).toBe('273.15');
  });

  it('deve converter 100°C corretamente', () => {
    component.celsius = 100;
    component.converterTemperatura();
    expect(component.fahrenheit).toBe('212.00');
    expect(component.kelvin).toBe('373.15');
  });

  it('deve converter -40°C corretamente', () => {
    component.celsius = -40;
    component.converterTemperatura();
    expect(component.fahrenheit).toBe('-40.00');
    expect(component.kelvin).toBe('233.15');
  });
});
